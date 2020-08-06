import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileDesignerComponent } from './editprofile-designer.component';

describe('EditprofileDesignerComponent', () => {
  let component: EditprofileDesignerComponent;
  let fixture: ComponentFixture<EditprofileDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofileDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofileDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
