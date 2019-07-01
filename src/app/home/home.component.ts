import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  match: MatchCard = {
    TournamentName: 'JK Tournament',
    MatchNumber: 1,
    HomeTeamName: 'ENG',
    HomeTeamRunsScored: 311,
    HomeTeamWicketsLost: 8,
    HomeTeamOversPlayed: 50,
    AwayTeamName: 'SA',
    AwayTeamRunsScored: 207,
    AwayTeamWicketsLost: 10,
    AwayTeamOversPlayed: 45,
    WinningTeamName : 'ENG',
    TotalOvers : 50,
    Status : 'Result',
    Date : new Date("2018-03-16"),
    Location: 'London',
    Summary: 'Ben Stokes and Jofra Archer lead England to imposing win.',
    DeleteAccess: true
  };
  matches: MatchCard[] = [this.match, this.match, this.match, this.match];

  constructor() { }

  ngOnInit() {
  }

}

export interface MatchCard {
  TournamentName: string;
  MatchNumber: number;
  HomeTeamName: string;
  HomeTeamRunsScored: number;
  HomeTeamWicketsLost: number;
  HomeTeamOversPlayed: number;
  AwayTeamName: string;
  AwayTeamRunsScored: number;
  AwayTeamWicketsLost: number;
  AwayTeamOversPlayed: number;
  WinningTeamName: string;
  TotalOvers: number;
  Status: string;
  Location: string;
  Date : Date;
  DeleteAccess : boolean;  
  Summary: string;
}