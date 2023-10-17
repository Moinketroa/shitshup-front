import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamelotWheelComponent } from './camelot-wheel.component';

describe('CamelotWheelComponent', () => {
  let component: CamelotWheelComponent;
  let fixture: ComponentFixture<CamelotWheelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamelotWheelComponent]
    });
    fixture = TestBed.createComponent(CamelotWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
