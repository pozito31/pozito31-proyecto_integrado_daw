import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GitSearchService {
  constructor(private http: HttpClient) {
  }

  
}