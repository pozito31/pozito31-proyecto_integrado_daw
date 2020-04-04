import { Injectable } from '@angular/core';
import { GitSearch } from './git-search'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  cachedSearches: Array<{
    [query: string]: GitSearch
  }> = [];
  search: Observable<GitSearch>;
  constructor(private http: HttpClient) {
      
   }

   gitSearch : Function = (query: string) : Observable<GitSearch> => {
    let promise = new Promise<GitSearch>((resolve, reject) => {
        if (this.cachedValues[query]) {
            resolve(this.cachedValues[query])
        }
        else {
            this.http.get('https://api.github.com/search/repositories?q=' + query)
            .toPromise()
            .then( (response) => {
                resolve(response as GitSearch)
            }, (error) => {
                reject(error);
            })
        }
    })
    return promise;
  }

}
