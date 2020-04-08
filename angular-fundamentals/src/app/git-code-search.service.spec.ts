import { TestBed, inject } from '@angular/core/testing';

import { GitCodeSearchService } from './git-code-search.service';

describe('GitCodeSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitCodeSearchService]
    });
  });

  it('should be created', inject([GitCodeSearchService], (service: GitCodeSearchService) => {
    expect(service).toBeTruthy();
  }));
});
