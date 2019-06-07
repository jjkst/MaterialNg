import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

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
