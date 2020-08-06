import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandhireorcontestComponent } from './brandhireorcontest.component';

describe('BrandhireorcontestComponent', () => {
  let component: BrandhireorcontestComponent;
  let fixture: ComponentFixture<BrandhireorcontestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandhireorcontestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandhireorcontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
