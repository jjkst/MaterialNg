import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [
  { path: '', component: MatchesComponent, data: { title: 'Matches Component' } },
  { path: 'matches', component: MatchesComponent, data: { title: 'Matches Component' } },
  { path: 'first', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'second', component: SecondComponent, data: { title: 'Second Component' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
