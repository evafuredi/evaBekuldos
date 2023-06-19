import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNOOKERComponent } from './snooker.component';

describe('SNOOKERComponent', () => {
  let component: SNOOKERComponent;
  let fixture: ComponentFixture<SNOOKERComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SNOOKERComponent]
    });
    fixture = TestBed.createComponent(SNOOKERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
