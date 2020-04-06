import { Injectable } from '@angular/core';
import { UnifiedSearch } from './unified-search';
import { Observable } from 'rxjs/Observable';
import { GitSearchService } from './git-search.service';
import { GitCodeSearchService } from './git-code-search.service';
import { GitSearch } from './git-search';
import { GitCodeSearch } from './git-code-search';
import { forkJoin, of, concat } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UnifiedSearchService {

  constructor(private searchService : GitSearchService, private codeSearchService : GitCodeSearchService) { }
  combineLatest : Function = (query: string) : Observable<UnifiedSearch> => {
    return concat(this.searchService.gitSearch(query), this.codeSearchService.codeSearch(query)).pipe(
      map( (response : [GitSearch, GitCodeSearch]) =>{
        return {
          'repositories' : response[0],
          'code': response[1]
        }
      })
    )
  }
}