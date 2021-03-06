import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TracksComponent, TrackDialog } from './tracks/tracks.component';
import { AppRoutingModule } from './app-routing.module';
import { TracksSummaryComponent } from './tracks-summary/tracks-summary.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HttpClientModule } from "@angular/common/http";
import { TrackDetailsService } from './services/track-details.service';
import { ScenarioSummaryComponent } from './scenario-summary/scenario-summary.component';
import { RecentTracksComponent } from './recent-tracks/recent-tracks.component';
import { NewTracksComponent } from './new-tracks/new-tracks.component';

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    TracksSummaryComponent,
    LeftNavComponent,
    TopNavComponent,
    DoughnutChartComponent,
    TrackDialog,
    ScenarioSummaryComponent,
    RecentTracksComponent,
    NewTracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatExpansionModule,
    MatCarouselModule,
    MatCardModule,
    ChartsModule
  ],
  providers: [TrackDetailsService],
  entryComponents: [TrackDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
