import { StrengthsInterface } from './../../interfaces/strengths.interface';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const user_url = environment.user_url;
const search_opportunities_url = environment.search_opportunities_url;
const search_people_url = environment.search_people_url;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUser(username: string) {
    return this.http.get<any>(`${user_url}/${username}`);
  }

  searchOpportunities(username: string) {
    return this.http.post(search_opportunities_url, {
      bestfor: {
        username: `${username}`,
      },
    });
  }

  searchPeople(skillName: string, skillDetail: StrengthsInterface) {
    return this.http.post(search_people_url, {
      'skill/role': {
        text: `${skillName}`,
        proficiency: `${skillDetail}`,
      },
    });
  }
}
