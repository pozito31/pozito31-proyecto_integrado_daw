import { Component, OnInit, Input } from '@angular/core';
import { GitCodeSearch } from '../git-code-search'

@Component({
  selector: 'app-repository-display',
  templateUrl: './repository-display.component.html',
  styleUrls: ['./repository-display.component.css']
})
export class RepositoryDisplayComponent implements OnInit {
  @Input() searchResults : GitCodeSearch;
  constructor() { }

  ngOnInit() {
  }

}
