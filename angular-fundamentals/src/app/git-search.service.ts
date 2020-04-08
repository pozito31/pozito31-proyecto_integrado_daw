import { Injectable, Inject } from '@angular/core';
import { GitSearch } from './git-search';
import { GitUser } from './git-user';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { exhaustMap, scan, mapTo, map, publishReplay, startWith, refCount, first, filter, switchMap } from 'rxjs/operators';

/* 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Origin': '*'
  })
};
 */
@Injectable()
export class GitSearchService {
  private cadenahttp: string;

  cachedValue: string;

  cachedValuesUser: Array<{
    [user: string]: GitUser
  }> = [];

  search: Observable<GitSearch>;

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

  /*
  gitSearchUser = (user: string): Promise<GitUser> => {
    let promise = new Promise<GitUser>((resolve, reject) => {
      if (this.cachedValuesUser[user]) {
        resolve(this.cachedValuesUser[user])
      }
      else {
        this.http.get('https://api.github.com/search/users?q=' + user)
          .toPromise()
          .then((response) => {
            resolve(response as GitUser)
          }, (error) => {
            reject(error);
          })
      }
    })
    return promise;
  }
*/

}