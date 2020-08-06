import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HirebrandingpageadminComponent } from './hirebrandingpageadmin.component';

describe('HirebrandingpageadminComponent', () => {
  let component: HirebrandingpageadminComponent;
  let fixture: ComponentFixture<HirebrandingpageadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HirebrandingpageadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HirebrandingpageadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
