import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkgalleryComponent } from './workgallery.component';

describe('WorkgalleryComponent', () => {
  let component: WorkgalleryComponent;
  let fixture: ComponentFixture<WorkgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
