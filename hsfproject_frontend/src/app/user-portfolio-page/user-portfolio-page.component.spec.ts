import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPortfolioPageComponent } from './user-portfolio-page.component';

describe('UserPortfolioPageComponent', () => {
  let component: UserPortfolioPageComponent;
  let fixture: ComponentFixture<UserPortfolioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPortfolioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPortfolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
