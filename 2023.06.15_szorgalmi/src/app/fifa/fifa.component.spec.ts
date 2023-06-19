import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIFAComponent } from './fifa.component';

describe('FIFAComponent', () => {
  let component: FIFAComponent;
  let fixture: ComponentFixture<FIFAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FIFAComponent]
    });
    fixture = TestBed.createComponent(FIFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
