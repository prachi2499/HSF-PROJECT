import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraininghireadminComponent } from './traininghireadmin.component';

describe('TraininghireadminComponent', () => {
  let component: TraininghireadminComponent;
  let fixture: ComponentFixture<TraininghireadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraininghireadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraininghireadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
