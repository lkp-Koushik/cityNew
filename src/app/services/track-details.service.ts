import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class TrackDetailsService {
  private viewTracks = new BehaviorSubject<string>('all');
  viewName = this.viewTracks.asObservable();
  constructor(private http: HttpClient) {}

  getTrackDtsl(url) {
    return this.http.get("assets/trackDtls.json");
  }
  //For filtering tracks
  sortTrack(viewName: string){
    this.viewTracks.next(viewName);
  }
}
