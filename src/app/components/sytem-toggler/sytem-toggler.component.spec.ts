import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SytemTogglerComponent } from './sytem-toggler.component';

describe('SytemTogglerComponent', () => {
  let component: SytemTogglerComponent;
  let fixture: ComponentFixture<SytemTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SytemTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SytemTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
