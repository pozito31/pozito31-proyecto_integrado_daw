import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevohermanoComponent } from './nuevohermano.component';

describe('NuevohermanoComponent', () => {
  let component: NuevohermanoComponent;
  let fixture: ComponentFixture<NuevohermanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevohermanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevohermanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
