import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsubcatadminComponent } from './editsubcatadmin.component';

describe('EditsubcatadminComponent', () => {
  let component: EditsubcatadminComponent;
  let fixture: ComponentFixture<EditsubcatadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsubcatadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsubcatadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
