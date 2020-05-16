import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarnuevohermanoComponent } from './editarnuevohermano.component';

describe('EditarnuevohermanoComponent', () => {
  let component: EditarnuevohermanoComponent;
  let fixture: ComponentFixture<EditarnuevohermanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarnuevohermanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarnuevohermanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
