import { TestBed } from '@angular/core/testing';

import { ServicioRestContactoService } from './servicio-rest-contacto.service';

describe('ServicioRestContactoService', () => {
  let service: ServicioRestContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRestContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
