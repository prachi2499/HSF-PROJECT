import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainAddDurationContestComponent } from './train-add-duration-contest.component';

describe('TrainAddDurationContestComponent', () => {
  let component: TrainAddDurationContestComponent;
  let fixture: ComponentFixture<TrainAddDurationContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainAddDurationContestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainAddDurationContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
