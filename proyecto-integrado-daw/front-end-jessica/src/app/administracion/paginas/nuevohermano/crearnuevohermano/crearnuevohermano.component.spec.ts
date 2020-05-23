import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearnuevohermanoComponent } from './crearnuevohermano.component';

describe('CrearnuevohermanoComponent', () => {
  let component: CrearnuevohermanoComponent;
  let fixture: ComponentFixture<CrearnuevohermanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearnuevohermanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearnuevohermanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
