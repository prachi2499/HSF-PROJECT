import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoworkDesigComponent } from './photowork-desig.component';

describe('PhotoworkDesigComponent', () => {
  let component: PhotoworkDesigComponent;
  let fixture: ComponentFixture<PhotoworkDesigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoworkDesigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoworkDesigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
