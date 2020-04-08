import { Component, OnInit, Input } from '@angular/core';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-repository-display',
  templateUrl: './repository-display.component.html',
  styleUrls: ['./repository-display.component.css']
})
export class RepositoryDisplayComponent implements OnInit {
  @Input() searchResults: GitSearch
  constructor() { }

  ngOnInit() {
  }

}
