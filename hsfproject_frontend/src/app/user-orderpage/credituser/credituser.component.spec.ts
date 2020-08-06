import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredituserComponent } from './credituser.component';

describe('CredituserComponent', () => {
  let component: CredituserComponent;
  let fixture: ComponentFixture<CredituserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredituserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
