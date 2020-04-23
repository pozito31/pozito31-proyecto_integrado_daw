import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesComponent } from './imagenes.component';

describe('ImagenesComponent', () => {
  let component: ImagenesComponent;
  let fixture: ComponentFixture<ImagenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
