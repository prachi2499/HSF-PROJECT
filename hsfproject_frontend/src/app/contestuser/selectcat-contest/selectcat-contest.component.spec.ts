import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcatContestComponent } from './selectcat-contest.component';

describe('SelectcatContestComponent', () => {
  let component: SelectcatContestComponent;
  let fixture: ComponentFixture<SelectcatContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectcatContestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectcatContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
