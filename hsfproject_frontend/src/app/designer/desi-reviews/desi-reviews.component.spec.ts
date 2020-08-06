import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiReviewsComponent } from './desi-reviews.component';

describe('DesiReviewsComponent', () => {
  let component: DesiReviewsComponent;
  let fixture: ComponentFixture<DesiReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesiReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesiReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
