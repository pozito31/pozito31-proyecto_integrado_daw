import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClienteComponent } from './editar-cliente.component';

describe('EditarClienteComponent', () => {
  let component: EditarClienteComponent;
  let fixture: ComponentFixture<EditarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
