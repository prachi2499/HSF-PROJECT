import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebituserComponent } from './debituser.component';

describe('DebituserComponent', () => {
  let component: DebituserComponent;
  let fixture: ComponentFixture<DebituserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebituserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
