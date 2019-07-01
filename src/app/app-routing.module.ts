import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentComponent } from './tournament/tournament.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home Component' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home Component' } },
  { path: 'tournament', component: TournamentComponent, data: { title: 'Tournament Component' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
