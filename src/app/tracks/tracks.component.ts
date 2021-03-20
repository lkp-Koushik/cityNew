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

  constructor(private trackDetailsService: TrackDetailsService, public dialog: MatDialog) {}

  ngOnInit(): void {
   this.trackDetailsService.getTrackDtsl("url").subscribe(
      response => {
        this.data = response;
      },
      err => {
        console.log(" exception whiel reading data form json file ", err);
      }
    );
    this.card = true;

    this.trackDetailsService.viewName.subscribe(result =>{
      this.showsortedTracks = result;
      console.log(this.showsortedTracks);
    });
  }
  showTrack(track){
   // alert(track)
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


}

@Component({
  selector: 'track-dialog',
  templateUrl: 'track-dialog.html',
})
export class TrackDialog {}
