import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvAddContestComponent } from './adv-add-contest.component';

describe('AdvAddContestComponent', () => {
  let component: AdvAddContestComponent;
  let fixture: ComponentFixture<AdvAddContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvAddContestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvAddContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
