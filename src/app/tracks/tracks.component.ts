import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { TrackDetailsService } from "../services/track-details.service";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})

export class TracksComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  //public data: Array<any>[];
  public data: any;
  public list:boolean;
  public card:boolean;
  public showsortedTracks = 'all';
  public allTracks:any;
  public draftTracks:Array<any> = [];
  public approvedTracks:Array<any> = [];
  public inProgressTracks:Array<any> = [];

  constructor(private trackDetailsService: TrackDetailsService, public dialog: MatDialog) {}

  ngOnInit(): void {
   this.trackDetailsService.getTrackDtsl("url").subscribe(
      response => {
        this.allTracks = response;
        this.data = response;
        for(let i=0; i<this.data.length;i++){
          if(this.data[i].status == 'Draft'){
            this.draftTracks.push(this.data[i]);
          }
          else if (this.data[i].status == 'Approved'){
            this.approvedTracks.push(this.data[i]);
          }
          else if (this.data[i].status == 'In Progress'){
            this.inProgressTracks.push(this.data[i]);
          }
        }
        console.log('Draft>>>>',this.draftTracks);
        console.log('Approved>>>>',this.approvedTracks);
        console.log('In Progress>>>>',this.inProgressTracks);
      },
      err => {
        console.log(" exception whiel reading data form json file ", err);
      }
    );
    this.card = true;

    this.trackDetailsService.viewName.subscribe(result =>{
      this.showsortedTracks = result;
      console.log(this.showsortedTracks);
      if(this.showsortedTracks == 'all'){
        this.data = this.allTracks;
      }
      else if(this.showsortedTracks == 'InProgress'){
        this.data = this.inProgressTracks;
      }
      else if(this.showsortedTracks == 'Approved'){
        this.data = this.approvedTracks;
      }
      else if(this.showsortedTracks == 'Draft'){
        this.data = this.draftTracks;
      }
    });
  }
  showTrack(track){
    this.dialog.open(TrackDialog,{ disableClose: true });
  }
listView(){
  this.card = false;
  this.list = true;
}
cardView(){
  this.card = true;
  this.list = false;
}

filterBy(evt){
  if(evt.target.value === 'draft')
    this.data = this.draftTracks;
  else if(evt.target.value === 'approved')
    this.data = this.approvedTracks;
  else if(evt.target.value === 'inProgress')
    this.data = this.inProgressTracks;
}


}

@Component({
  selector: 'track-dialog',
  templateUrl: 'track-dialog.html',
})
export class TrackDialog {}
