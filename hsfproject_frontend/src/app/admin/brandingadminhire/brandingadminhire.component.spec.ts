import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingadminhireComponent } from './brandingadminhire.component';

describe('BrandingadminhireComponent', () => {
  let component: BrandingadminhireComponent;
  let fixture: ComponentFixture<BrandingadminhireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandingadminhireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandingadminhireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
