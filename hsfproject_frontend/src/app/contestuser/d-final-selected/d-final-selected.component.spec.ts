import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DFinalSelectedComponent } from './d-final-selected.component';

describe('DFinalSelectedComponent', () => {
  let component: DFinalSelectedComponent;
  let fixture: ComponentFixture<DFinalSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DFinalSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DFinalSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
