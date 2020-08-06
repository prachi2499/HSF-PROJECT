import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadvertisingComponent } from './editadvertising.component';

describe('EditadvertisingComponent', () => {
  let component: EditadvertisingComponent;
  let fixture: ComponentFixture<EditadvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditadvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
