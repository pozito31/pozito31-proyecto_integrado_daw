import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovenasComponent } from './novenas.component';

describe('NovenasComponent', () => {
  let component: NovenasComponent;
  let fixture: ComponentFixture<NovenasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovenasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
