import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarnuevohermanoComponent } from './listarnuevohermano.component';

describe('ListarnuevohermanoComponent', () => {
  let component: ListarnuevohermanoComponent;
  let fixture: ComponentFixture<ListarnuevohermanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarnuevohermanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarnuevohermanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
