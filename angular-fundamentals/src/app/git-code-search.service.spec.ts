import { TestBed } from '@angular/core/testing';

import { GitCodeSearchService } from './git-code-search.service';

describe('GitCodeSearchService', () => {
  let service: GitCodeSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitCodeSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
