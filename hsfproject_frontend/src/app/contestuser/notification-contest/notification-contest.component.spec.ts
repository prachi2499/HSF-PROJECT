import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationContestComponent } from './notification-contest.component';

describe('NotificationContestComponent', () => {
  let component: NotificationContestComponent;
  let fixture: ComponentFixture<NotificationContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationContestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
