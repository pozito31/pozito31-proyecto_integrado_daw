import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitUsersService } from './git-users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchService]
})
export class AppComponent implements OnInit {
  constructor(private GitSearchService: GitSearchService, private GitUsersService: GitUsersService) {

  }
  ngOnInit() {
    this.GitSearchService.gitSearch('angular').then( (response) => {
      alert("Total Libraries Found:" + response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText);
    })
    this.GitUsersService.gitUsers('angular').then( (response) => {
      alert("Total Libraries Found:" + response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  }
  title = 'app is functional!';
}
