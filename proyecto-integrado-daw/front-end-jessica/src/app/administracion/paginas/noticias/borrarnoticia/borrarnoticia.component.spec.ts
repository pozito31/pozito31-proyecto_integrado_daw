import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarnoticiaComponent } from './borrarnoticia.component';

describe('BorrarnoticiaComponent', () => {
  let component: BorrarnoticiaComponent;
  let fixture: ComponentFixture<BorrarnoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarnoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
