import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireadvuserComponent } from './hireadvuser.component';

describe('HireadvuserComponent', () => {
  let component: HireadvuserComponent;
  let fixture: ComponentFixture<HireadvuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireadvuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireadvuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
