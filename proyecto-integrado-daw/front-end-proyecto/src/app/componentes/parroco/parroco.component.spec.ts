import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrocoComponent } from './parroco.component';

describe('ParrocoComponent', () => {
  let component: ParrocoComponent;
  let fixture: ComponentFixture<ParrocoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParrocoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParrocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
