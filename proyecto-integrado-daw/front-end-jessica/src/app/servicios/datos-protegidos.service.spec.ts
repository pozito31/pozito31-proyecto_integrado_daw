import { TestBed } from '@angular/core/testing';

import { DatosProtegidosService } from './datos-protegidos.service';

describe('DatosProtegidosService', () => {
  let service: DatosProtegidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosProtegidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
