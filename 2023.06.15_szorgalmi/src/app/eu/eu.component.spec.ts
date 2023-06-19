import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EUComponent } from './eu.component';

describe('EUComponent', () => {
  let component: EUComponent;
  let fixture: ComponentFixture<EUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EUComponent]
    });
    fixture = TestBed.createComponent(EUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
