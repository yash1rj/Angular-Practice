import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GithubService } from './github.service';

import { repos} from './repos';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  userName: string ="tektutorialshub"
  pageNo  = '1';
  sortOn = 'description';
  repos: repos[];

  loading: boolean=false;
  errorMessage;

  constructor(private githubService: GithubService) {
  }

  public getRepos() {
      this.loading=true;
      this.errorMessage="";
      this.githubService.getRepos(this.userName,this.pageNo,this.sortOn)
          .subscribe((response) => {this.repos=response;},
          (error) => {this.errorMessage=error; this.loading=false; },
          () => {this.loading=false;})
  }
}
