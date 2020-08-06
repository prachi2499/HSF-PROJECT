
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DesignermenuComponent } from './designermenu.component';

describe('DesignermenuComponent', () => {
  let component: DesignermenuComponent;
  let fixture: ComponentFixture<DesignermenuComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [DesignermenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
