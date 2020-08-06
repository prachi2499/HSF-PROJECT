import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbrandingadminComponent } from './editbrandingadmin.component';

describe('EditbrandingadminComponent', () => {
  let component: EditbrandingadminComponent;
  let fixture: ComponentFixture<EditbrandingadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbrandingadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbrandingadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
