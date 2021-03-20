import { Component, OnInit } from '@angular/core';
import { TrackDetailsService } from '../services/track-details.service';

@Component({
  selector: 'app-scenario-summary',
  templateUrl: './scenario-summary.component.html',
  styleUrls: ['./scenario-summary.component.css']
})
export class ScenarioSummaryComponent implements OnInit {

  constructor(private trackDetailsService: TrackDetailsService) { }

  ngOnInit(): void {
  }

  progressClick(value)
  {
    alert(value);
    this.trackDetailsService.sortTrack(value);
  }
}
