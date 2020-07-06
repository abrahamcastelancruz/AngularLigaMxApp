import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  team: any = {};

  show: boolean = true;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _league: LeagueService
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.getTeam(params['id']);
    });
  }

  ngOnInit(): void {}

  getTeam(id: string) {
    this._league.getTeam(id).subscribe((team) => {
      //console.log(team);
      this.team = team;
    });
  }
}
