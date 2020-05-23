import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarnoticiaComponent } from './editarnoticia.component';

describe('EditarnoticiaComponent', () => {
  let component: EditarnoticiaComponent;
  let fixture: ComponentFixture<EditarnoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarnoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
