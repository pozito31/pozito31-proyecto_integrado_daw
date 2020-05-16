import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcontactoComponent } from './crearcontacto.component';

describe('CrearcontactoComponent', () => {
  let component: CrearcontactoComponent;
  let fixture: ComponentFixture<CrearcontactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearcontactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
