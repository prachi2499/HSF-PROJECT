import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestworkComponent } from './contestwork.component';

describe('ContestworkComponent', () => {
  let component: ContestworkComponent;
  let fixture: ComponentFixture<ContestworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
