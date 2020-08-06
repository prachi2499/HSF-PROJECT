import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisinghireComponent } from './advertisinghire.component';

describe('AdvertisinghireComponent', () => {
  let component: AdvertisinghireComponent;
  let fixture: ComponentFixture<AdvertisinghireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisinghireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisinghireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
