import { Injectable } from '@angular/core';
import { GitSearch } from './git-search'
import { GitUsers } from './git-users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { exhaustMap, scan, mapTo, map, publishReplay, startWith, refCount, first, filter, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  private cadenahttp: string;
  cachedValue: string;
    search: Observable<GitSearch>;
  cachedUsers: Array<{
      [query: string]: GitUsers
  }> = [];
  constructor(private http: HttpClient) {
      
   }

   gitSearch: Function = (query: string, page: number): Observable<GitSearch> => {

    if (page === null) {
      this.cadenahttp = query;
    }
    else {
      this.cadenahttp = query + '&page=' + page;
    }

      this.search = this.http.get<GitSearch>('https://api.github.com/search/repositories?q=' + this.cadenahttp).pipe(        
        publishReplay(1),
        refCount());
      this.cachedValue = query;      
    
    return this.search;
  }

  gitUsers = (query: string) : Promise<GitUsers> => {
    let promise = new Promise<GitUsers>((resolve, reject) => {
        if (this.cachedUsers[query]) {
            resolve(this.cachedUsers[query])
        }
        else {
            this.http.get('https://api.github.com/search/users?q=' + query)
            .toPromise()
            .then( (response) => {
                resolve(response as GitUsers)
            }, (error) => {
                reject(error);
            })
        }
    })
    return promise;
  }
}
