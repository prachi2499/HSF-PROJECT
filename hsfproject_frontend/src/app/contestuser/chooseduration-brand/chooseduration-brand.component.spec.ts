import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedurationBrandComponent } from './chooseduration-brand.component';

describe('ChoosedurationBrandComponent', () => {
  let component: ChoosedurationBrandComponent;
  let fixture: ComponentFixture<ChoosedurationBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosedurationBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosedurationBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
