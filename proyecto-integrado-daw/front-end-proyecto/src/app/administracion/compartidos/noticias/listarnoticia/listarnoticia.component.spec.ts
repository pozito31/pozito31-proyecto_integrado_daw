import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarnoticiaComponent } from './listarnoticia.component';

describe('ListarnoticiaComponent', () => {
  let component: ListarnoticiaComponent;
  let fixture: ComponentFixture<ListarnoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarnoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
