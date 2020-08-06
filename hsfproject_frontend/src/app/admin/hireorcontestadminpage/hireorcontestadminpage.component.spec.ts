import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireorcontestadminpageComponent } from './hireorcontestadminpage.component';

describe('HireorcontestadminpageComponent', () => {
  let component: HireorcontestadminpageComponent;
  let fixture: ComponentFixture<HireorcontestadminpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireorcontestadminpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireorcontestadminpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
