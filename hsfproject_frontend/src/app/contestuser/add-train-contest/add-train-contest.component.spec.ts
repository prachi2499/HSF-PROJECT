import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainContestComponent } from './add-train-contest.component';

describe('AddTrainContestComponent', () => {
  let component: AddTrainContestComponent;
  let fixture: ComponentFixture<AddTrainContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrainContestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
