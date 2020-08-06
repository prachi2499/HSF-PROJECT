import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalldesignerAdminComponent } from './viewalldesigner-admin.component';

describe('ViewalldesignerAdminComponent', () => {
  let component: ViewalldesignerAdminComponent;
  let fixture: ComponentFixture<ViewalldesignerAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewalldesignerAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalldesignerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
