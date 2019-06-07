import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  matches: MatchCard[] = [
  ];

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
  MatchDate : Date;
  DeleteAccess : boolean;  
  MatchSummary: string;
}