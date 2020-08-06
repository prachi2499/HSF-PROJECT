import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvDurationContestComponent } from './adv-duration-contest.component';

describe('AdvDurationContestComponent', () => {
  let component: AdvDurationContestComponent;
  let fixture: ComponentFixture<AdvDurationContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvDurationContestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvDurationContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
