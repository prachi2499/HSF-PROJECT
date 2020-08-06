import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfiveorderComponent } from './topfiveorder.component';

describe('TopfiveorderComponent', () => {
  let component: TopfiveorderComponent;
  let fixture: ComponentFixture<TopfiveorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopfiveorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopfiveorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
