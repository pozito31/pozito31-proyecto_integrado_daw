import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcontactoComponent } from './editarcontacto.component';

describe('EditarcontactoComponent', () => {
  let component: EditarcontactoComponent;
  let fixture: ComponentFixture<EditarcontactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarcontactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
