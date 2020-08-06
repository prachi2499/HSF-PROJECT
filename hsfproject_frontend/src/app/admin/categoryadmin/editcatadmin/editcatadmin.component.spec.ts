import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcatadminComponent } from './editcatadmin.component';

describe('EditcatadminComponent', () => {
  let component: EditcatadminComponent;
  let fixture: ComponentFixture<EditcatadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcatadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcatadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
