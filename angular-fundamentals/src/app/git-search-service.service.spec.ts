import { TestBed, inject } from '@angular/core/testing';

import { GitSearchServiceService } from './git-search-service.service';

describe('GitSearchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitSearchServiceService]
    });
  });

  it('should ...', inject([GitSearchServiceService], (service: GitSearchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
