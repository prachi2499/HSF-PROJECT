import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewAdminComponent } from './add-review-admin.component';

describe('AddReviewAdminComponent', () => {
  let component: AddReviewAdminComponent;
  let fixture: ComponentFixture<AddReviewAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
