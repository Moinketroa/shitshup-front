import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessStepsProgressComponent } from './process-steps-progress.component';

describe('ProcessStepsProgressComponent', () => {
  let component: ProcessStepsProgressComponent;
  let fixture: ComponentFixture<ProcessStepsProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessStepsProgressComponent]
    });
    fixture = TestBed.createComponent(ProcessStepsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
