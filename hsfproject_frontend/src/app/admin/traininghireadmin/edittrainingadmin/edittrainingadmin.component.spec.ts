import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittrainingadminComponent } from './edittrainingadmin.component';

describe('EdittrainingadminComponent', () => {
  let component: EdittrainingadminComponent;
  let fixture: ComponentFixture<EdittrainingadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittrainingadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittrainingadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
