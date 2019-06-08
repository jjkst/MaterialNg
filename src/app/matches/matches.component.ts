import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
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
  MatchStatus: string;
  MatchLocation: string;
  // MatchDate : Date;
  // DeleteAccess : boolean;  
  MatchSummary: string;
}