import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})

export class TracksComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  public data: Object[];
  public list:boolean;
  public card:boolean;

  constructor() { }

  ngOnInit(): void {
    this.card = true;
    this.data = [
      {
        status:'In Progress',track:'Track 1',details:'details will go here',scenariosCount:'3'
      },
      {
        status:'Approved',track:'Track 2',details:'details will go here',scenariosCount:'7'
      },
      {
        status:'In Progress',track:'Track 3',details:'details will go here',scenariosCount:'4'
      },
      {
        status:'In Progress',track:'Track 4',details:'details will go here',scenariosCount:'108'
      },
      {
        status:'Draft',track:'Track 5',details:'details will go here',scenariosCount:'2'
      },
      {
        status:'In Progress',track:'Track 6',details:'details will go here',scenariosCount:'2'
      },
      {
        status:'Approved',track:'Track 7',details:'details will go here',scenariosCount:'6'
      },
      {
        status:'Draft',track:'Track 8',details:'details will go here',scenariosCount:'3'
      },
      {
        status:'In Progress',track:'Track 9',details:'details will go here',scenariosCount:'106'
      },
      {
        status:'Approved',track:'Track 10',details:'details will go here',scenariosCount:'8'
      },
      {
        status:'In Progress',track:'Track 11',details:'details will go here',scenariosCount:'9'
      },
      {
        status:'In Progress',track:'Track 12',details:'details will go here',scenariosCount:'5'
      },
      {
        status:'Draft',track:'Track 13',details:'details will go here',scenariosCount:'4'
      },
      {
        status:'In Progress',track:'Track 14',details:'details will go here',scenariosCount:'9'
      },
      {
        status:'Approved',track:'Track 15',details:'details will go here',scenariosCount:'8'
      },
      {
        status:'Draft',track:'Track 16',details:'details will go here',scenariosCount:'5'
      },
      {
        status:'Draft',track:'Track 17',details:'details will go here',scenariosCount:'4'
      },
      {
        status:'In Progress',track:'Track 18',details:'details will go here',scenariosCount:'9'
      },
      {
        status:'Approved',track:'Track 19',details:'details will go here',scenariosCount:'8'
      },
      {
        status:'Draft',track:'Track 20',details:'details will go here',scenariosCount:'5'
      }
      ]
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
