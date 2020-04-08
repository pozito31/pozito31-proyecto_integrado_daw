import { TestBed } from '@angular/core/testing';

import { GitSearchService } from './git-search.service';

describe('GitSearchService', () => {
  let service: GitSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
