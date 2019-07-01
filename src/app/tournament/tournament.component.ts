import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  tournament: Tournament = {
    Name: 'JK Tournament',
    StartDate: new Date("2018-03-16"),
    EndDate: new Date("2018-05-16"),
    MatchesNotStarted: 4,
    MatchesInProgress: 8,
    MatchesComplete: 10
  };
  tournaments: Tournament[] = [this.tournament, this.tournament, this.tournament, this.tournament];

  constructor() { }

  ngOnInit() {
  }

}

export interface Tournament {
  Name: string;
  StartDate : Date;
  EndDate : Date; 
  MatchesNotStarted: number; 
  MatchesInProgress: number;
  MatchesComplete: number;
}
