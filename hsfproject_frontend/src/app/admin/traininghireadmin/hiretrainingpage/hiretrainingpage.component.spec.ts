import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiretrainingpageComponent } from './hiretrainingpage.component';

describe('HiretrainingpageComponent', () => {
  let component: HiretrainingpageComponent;
  let fixture: ComponentFixture<HiretrainingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiretrainingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiretrainingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
