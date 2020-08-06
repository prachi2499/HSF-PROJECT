import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestcheckAdvComponent } from './contestcheck-adv.component';

describe('ContestcheckAdvComponent', () => {
  let component: ContestcheckAdvComponent;
  let fixture: ComponentFixture<ContestcheckAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestcheckAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestcheckAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
