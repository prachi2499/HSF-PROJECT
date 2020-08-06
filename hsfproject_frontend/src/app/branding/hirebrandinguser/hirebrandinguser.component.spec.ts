import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HirebrandinguserComponent } from './hirebrandinguser.component';

describe('HirebrandinguserComponent', () => {
  let component: HirebrandinguserComponent;
  let fixture: ComponentFixture<HirebrandinguserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HirebrandinguserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HirebrandinguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
