import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerUploadImgComponent } from './designer-upload-img.component';

describe('DesignerUploadImgComponent', () => {
  let component: DesignerUploadImgComponent;
  let fixture: ComponentFixture<DesignerUploadImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerUploadImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerUploadImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
