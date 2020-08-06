import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAdminComponent } from './review-admin.component';

describe('ReviewAdminComponent', () => {
  let component: ReviewAdminComponent;
  let fixture: ComponentFixture<ReviewAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
