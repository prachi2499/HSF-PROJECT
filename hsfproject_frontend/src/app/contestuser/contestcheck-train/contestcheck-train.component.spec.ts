import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestcheckTrainComponent } from './contestcheck-train.component';

describe('ContestcheckTrainComponent', () => {
  let component: ContestcheckTrainComponent;
  let fixture: ComponentFixture<ContestcheckTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestcheckTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestcheckTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
