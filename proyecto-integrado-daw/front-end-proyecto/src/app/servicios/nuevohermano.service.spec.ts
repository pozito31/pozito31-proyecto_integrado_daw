import { TestBed } from '@angular/core/testing';

import { NuevohermanoService } from './nuevohermano.service';

describe('NuevohermanoService', () => {
  let service: NuevohermanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevohermanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
