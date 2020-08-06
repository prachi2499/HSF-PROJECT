import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedesignerTrainingUserComponent } from './choosedesigner-training-user.component';

describe('ChoosedesignerTrainingUserComponent', () => {
  let component: ChoosedesignerTrainingUserComponent;
  let fixture: ComponentFixture<ChoosedesignerTrainingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosedesignerTrainingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosedesignerTrainingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
