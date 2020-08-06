import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedesignerUserComponent } from './choosedesigner-user.component';

describe('ChoosedesignerUserComponent', () => {
  let component: ChoosedesignerUserComponent;
  let fixture: ComponentFixture<ChoosedesignerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosedesignerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosedesignerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
