import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { TrackDetailsService } from "../services/track-details.service";

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})

export class TracksComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
   public data: Array<any>[];
  public list:boolean;
  public card:boolean;

  constructor(private trackDetailsService: TrackDetailsService) {}

  ngOnInit(): void {
   this.trackDetailsService.getTrackDtsl("url").subscribe(
      response => {
        debugger;
        this.data = response;
      },
      err => {
        console.log(" exception whiel reading data form json file ", err);
      }
    );
    this.card = true;
  }
  showTrack(){
    alert('hello');
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
