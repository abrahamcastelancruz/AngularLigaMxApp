import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  constructor(private _http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://www.thesportsdb.com/api/v1/json/1/${query}`;
    return this._http.get(url);
  }

  getTeams() {
    return this.getQuery('lookup_all_teams.php?id=4350').pipe(
      map((teams) => {
        return teams['teams'];
      })
    );
  }

  getTeam(id: string) {
    return this.getQuery(`lookupteam.php?id=${id}`).pipe(
      map((team) => {
        return team['teams']['0'];
      })
    );
  }
}
