import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestuploadedworkComponent } from './contestuploadedwork.component';

describe('ContestuploadedworkComponent', () => {
  let component: ContestuploadedworkComponent;
  let fixture: ComponentFixture<ContestuploadedworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestuploadedworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestuploadedworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
