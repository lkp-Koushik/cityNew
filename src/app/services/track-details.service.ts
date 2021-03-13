import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class TrackDetailsService {
  constructor(private http: HttpClient) {}

  getTrackDtsl(url) {
    return this.http.get("assets/trackDtls.json");
  }
}
