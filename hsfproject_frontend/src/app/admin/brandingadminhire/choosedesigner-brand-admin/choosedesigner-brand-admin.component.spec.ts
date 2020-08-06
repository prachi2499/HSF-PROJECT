import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedesignerBrandAdminComponent } from './choosedesigner-brand-admin.component';

describe('ChoosedesignerBrandAdminComponent', () => {
  let component: ChoosedesignerBrandAdminComponent;
  let fixture: ComponentFixture<ChoosedesignerBrandAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosedesignerBrandAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosedesignerBrandAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
