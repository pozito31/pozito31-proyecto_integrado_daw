import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarnuevohermanoComponent } from './borrarnuevohermano.component';

describe('BorrarnuevohermanoComponent', () => {
  let component: BorrarnuevohermanoComponent;
  let fixture: ComponentFixture<BorrarnuevohermanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarnuevohermanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarnuevohermanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
