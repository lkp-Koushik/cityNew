import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TracksComponent } from './tracks/tracks.component';


const appRoutes: Routes =
[
  { path: '', redirectTo: '/tracks', pathMatch: 'full' },
  { path: 'tracks', component: TracksComponent },

  // { path: '**', redirectTo: '/pagenotfound' }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
