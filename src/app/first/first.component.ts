import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
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
    MatchStatus : 'Complete',
    MatchLocation: 'London',
    MatchSummary: 'Ben Stokes and Jofra Archer lead England to imposing win.'
  };
  matches: MatchCard[] = [this.match, this.match, this.match];

  tiles: TeamScore[] = [
    {text: 'ENG', cols: 2, rows: 1, color: 'skyblue'},
    {text: '311/8', cols: 1, rows: 1, color: 'skyblue'},
    {text: 'SA', cols: 2, rows: 1, color: 'lightgreen'},
    {text: '207', cols: 1, rows: 1, color: 'lightgreen'},
  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface TeamScore {
  color: string;
  cols: number;
  rows: number;
  text: string;
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
  MatchStatus: string;
  MatchLocation: string;
  // MatchDate : Date;
  // DeleteAccess : boolean;  
  MatchSummary: string;
}