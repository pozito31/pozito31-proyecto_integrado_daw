import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceroComponent } from './cabecero.component';

describe('CabeceroComponent', () => {
  let component: CabeceroComponent;
  let fixture: ComponentFixture<CabeceroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
