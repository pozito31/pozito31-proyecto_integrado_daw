import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HermanomayorComponent } from './hermanomayor.component';

describe('HermanomayorComponent', () => {
  let component: HermanomayorComponent;
  let fixture: ComponentFixture<HermanomayorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HermanomayorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HermanomayorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
