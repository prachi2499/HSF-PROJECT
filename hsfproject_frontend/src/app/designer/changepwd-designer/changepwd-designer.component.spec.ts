import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepwdDesignerComponent } from './changepwd-designer.component';

describe('ChangepwdDesignerComponent', () => {
  let component: ChangepwdDesignerComponent;
  let fixture: ComponentFixture<ChangepwdDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepwdDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepwdDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
