import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HELSINKIComponent } from './helsinki.component';

describe('HELSINKIComponent', () => {
  let component: HELSINKIComponent;
  let fixture: ComponentFixture<HELSINKIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HELSINKIComponent]
    });
    fixture = TestBed.createComponent(HELSINKIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
