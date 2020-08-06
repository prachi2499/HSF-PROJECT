import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatadminComponent } from './subcatadmin.component';

describe('SubcatadminComponent', () => {
  let component: SubcatadminComponent;
  let fixture: ComponentFixture<SubcatadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcatadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcatadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
