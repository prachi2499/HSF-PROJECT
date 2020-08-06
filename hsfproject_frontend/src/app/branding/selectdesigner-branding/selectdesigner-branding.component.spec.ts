import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdesignerBrandingComponent } from './selectdesigner-branding.component';

describe('SelectdesignerBrandingComponent', () => {
  let component: SelectdesignerBrandingComponent;
  let fixture: ComponentFixture<SelectdesignerBrandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectdesignerBrandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectdesignerBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
