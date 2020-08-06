import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratspageComponent } from './congratspage.component';

describe('CongratspageComponent', () => {
  let component: CongratspageComponent;
  let fixture: ComponentFixture<CongratspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongratspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
