import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { repos } from './repos';

@Injectable()
export class GithubService {

  baseURL:string="https://api.github.com/";

  constructor(private http:HttpClient){
  }

  getRepos(userName:string, PageNo: string, SortOn: string): Observable<repos[]> {

      const params = new HttpParams()
        .set('page', PageNo)
        .set('sort', SortOn);

      console.log(params.toString());

      return this.http.get<repos[]>(this.baseURL + 'users/' + userName + '/repos', {params})
  }

}
