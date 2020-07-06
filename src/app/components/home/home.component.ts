import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  teams: any[] = [];

  constructor(private _league: LeagueService, private router: Router) {}

  ngOnInit(): void {
    this._league.getTeams().subscribe((teams) => {
      //console.log(teams);
      this.teams = teams;
    });
  }

  getIndex(team: any) {
    let teamId = team.idTeam;
    this.router.navigate(['/team', teamId]);
  }
}
