import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredesignerComponent } from './hiredesigner.component';

describe('HiredesignerComponent', () => {
  let component: HiredesignerComponent;
  let fixture: ComponentFixture<HiredesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiredesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
