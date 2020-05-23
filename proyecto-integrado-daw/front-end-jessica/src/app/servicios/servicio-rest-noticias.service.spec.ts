import { TestBed } from '@angular/core/testing';

import { ServicioRestNoticiasService } from './servicio-rest-noticias.service';

describe('ServicioRestNoticiasService', () => {
  let service: ServicioRestNoticiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRestNoticiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
