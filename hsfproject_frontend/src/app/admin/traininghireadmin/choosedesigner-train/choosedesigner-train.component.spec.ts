import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedesignerTrainComponent } from './choosedesigner-train.component';

describe('ChoosedesignerTrainComponent', () => {
  let component: ChoosedesignerTrainComponent;
  let fixture: ComponentFixture<ChoosedesignerTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosedesignerTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosedesignerTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
