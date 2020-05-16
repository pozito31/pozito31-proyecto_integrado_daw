import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadonoticiaComponent } from './listadonoticia.component';

describe('ListadonoticiaComponent', () => {
  let component: ListadonoticiaComponent;
  let fixture: ComponentFixture<ListadonoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadonoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadonoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
