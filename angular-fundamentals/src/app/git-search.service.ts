import { Injectable } from '@angular/core';
import { GitSearch } from './git-search'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  cachedValue: string;
  search: Observable<GitSearch>;
  constructor(private http: HttpClient) {
      
   }

   gitSearch : Function = (query: string) : Observable<GitSearch> => {
    if (!this.search) {
        this.search = this.http.get<GitSearch>('https://api.github.com/search/repositories?q=' + query)
        .publishReplay(1)
        .refCount();
        this.cachedValue = query;
    }
    else if (this.cachedValue !== query) {
        this.search = null;
        this.gitSearch(query);
    }
    return this.search;
  }
}
