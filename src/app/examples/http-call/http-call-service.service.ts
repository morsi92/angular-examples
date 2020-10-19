import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './models/team';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCallServiceService {

  constructor(private httpClient: HttpClient) { }

  public retrieveTeams() : Observable<Team[]> {
    return this.httpClient.get<Team[]>("api/teams");
  }
}
