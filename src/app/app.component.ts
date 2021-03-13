import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
   public leftnav:string;

  ngOnInit(): void {
    this.leftnav='closed';
  }
  openLeftnav(){
    this.leftnav='open';
    //console.log('opened');
  }
  closeLeftnav(){
    this.leftnav='closed';
    //console.log('close');
  }
}

