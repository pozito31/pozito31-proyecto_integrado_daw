import { TestBed, inject } from '@angular/core/testing';

import { UnifiedSearchService } from './unified-search.service';

describe('UnifiedSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnifiedSearchService]
    });
  });

  it('should be created', inject([UnifiedSearchService], (service: UnifiedSearchService) => {
    expect(service).toBeTruthy();
  }));
});
