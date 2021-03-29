import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-new-tracks',
  templateUrl: './new-tracks.component.html',
  styleUrls: ['./new-tracks.component.css']
})
export class NewTracksComponent implements OnInit {

  slides = [
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
