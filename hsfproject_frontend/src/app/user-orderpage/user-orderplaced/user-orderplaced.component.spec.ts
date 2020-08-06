import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderplacedComponent } from './user-orderplaced.component';

describe('UserOrderplacedComponent', () => {
  let component: UserOrderplacedComponent;
  let fixture: ComponentFixture<UserOrderplacedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrderplacedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrderplacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
