import { Injectable } from '@angular/core';
import { UnifiedSearch } from './unified-search';
import { Observable } from 'rxjs/Observable';
import { GitSearchService } from './git-search.service'
import { GitCodeSearchService } from './git-code-search.service'

@Injectable({
  providedIn: 'root'
})
export class UnifiedSearchService {

  constructor(private searchService : GitSearchService, private codeSearchService : GitCodeSearchService) { }
  unifiedSearch : Function = (query: string) : Observable<UnifiedSearch> => {

  }
}
