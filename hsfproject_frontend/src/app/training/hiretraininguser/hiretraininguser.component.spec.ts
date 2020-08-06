import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiretraininguserComponent } from './hiretraininguser.component';

describe('HiretraininguserComponent', () => {
  let component: HiretraininguserComponent;
  let fixture: ComponentFixture<HiretraininguserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiretraininguserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiretraininguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
