import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarcontactoComponent } from './borrarcontacto.component';

describe('BorrarcontactoComponent', () => {
  let component: BorrarcontactoComponent;
  let fixture: ComponentFixture<BorrarcontactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarcontactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
