import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadonuevohermanoComponent } from './listadonuevohermano.component';

describe('ListadonuevohermanoComponent', () => {
  let component: ListadonuevohermanoComponent;
  let fixture: ComponentFixture<ListadonuevohermanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadonuevohermanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadonuevohermanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
