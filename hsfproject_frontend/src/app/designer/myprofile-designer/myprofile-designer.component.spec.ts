import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofileDesignerComponent } from './myprofile-designer.component';

describe('MyprofileDesignerComponent', () => {
  let component: MyprofileDesignerComponent;
  let fixture: ComponentFixture<MyprofileDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprofileDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofileDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
