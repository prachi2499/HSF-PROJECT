import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireorcontestpageComponent } from './hireorcontestpage.component';

describe('HireorcontestpageComponent', () => {
  let component: HireorcontestpageComponent;
  let fixture: ComponentFixture<HireorcontestpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireorcontestpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireorcontestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
