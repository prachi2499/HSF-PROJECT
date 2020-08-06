import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedesignerComponent } from './choosedesigner.component';

describe('ChoosedesignerComponent', () => {
  let component: ChoosedesignerComponent;
  let fixture: ComponentFixture<ChoosedesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosedesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosedesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
