import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorderDesignerComponent } from './pastorder-designer.component';

describe('PastorderDesignerComponent', () => {
  let component: PastorderDesignerComponent;
  let fixture: ComponentFixture<PastorderDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastorderDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorderDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
