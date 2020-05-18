import { TestBed } from '@angular/core/testing';

import { ServicioRestNuevohermanoService } from './servicio-rest-nuevohermano.service';

describe('ServicioRestNuevohermanoService', () => {
  let service: ServicioRestNuevohermanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRestNuevohermanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
