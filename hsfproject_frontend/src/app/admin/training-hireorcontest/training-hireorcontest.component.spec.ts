import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingHireorcontestComponent } from './training-hireorcontest.component';

describe('TrainingHireorcontestComponent', () => {
  let component: TrainingHireorcontestComponent;
  let fixture: ComponentFixture<TrainingHireorcontestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingHireorcontestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingHireorcontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
