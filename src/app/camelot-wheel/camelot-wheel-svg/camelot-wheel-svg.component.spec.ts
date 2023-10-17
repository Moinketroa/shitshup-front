import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamelotWheelSvgComponent } from './camelot-wheel-svg.component';

describe('CamelotWheelSvgComponent', () => {
  let component: CamelotWheelSvgComponent;
  let fixture: ComponentFixture<CamelotWheelSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamelotWheelSvgComponent]
    });
    fixture = TestBed.createComponent(CamelotWheelSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
