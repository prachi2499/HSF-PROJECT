import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalcreditcardComponent } from './finalcreditcard.component';

describe('FinalcreditcardComponent', () => {
  let component: FinalcreditcardComponent;
  let fixture: ComponentFixture<FinalcreditcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalcreditcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalcreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
