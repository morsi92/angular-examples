import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCallServiceService } from '../http-call-service.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-http-call-example',
  templateUrl: './http-call-example.component.html',
  styles: [
  ]
})
export class HttpCallExampleComponent implements OnInit {

  

  constructor(private httpCallServiceService: HttpCallServiceService) { }

  teams$ : Observable<Team[]> = this.httpCallServiceService.retrieveTeams();

  ngOnInit(): void {
  }

}
