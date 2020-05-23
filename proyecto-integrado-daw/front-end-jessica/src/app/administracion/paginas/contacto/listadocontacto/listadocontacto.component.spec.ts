import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocontactoComponent } from './listadocontacto.component';

describe('ListadocontactoComponent', () => {
  let component: ListadocontactoComponent;
  let fixture: ComponentFixture<ListadocontactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadocontactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
