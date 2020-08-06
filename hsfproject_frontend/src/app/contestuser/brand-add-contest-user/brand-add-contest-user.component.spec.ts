import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAddContestUserComponent } from './brand-add-contest-user.component';

describe('BrandAddContestUserComponent', () => {
  let component: BrandAddContestUserComponent;
  let fixture: ComponentFixture<BrandAddContestUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandAddContestUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAddContestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
