import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskProgressTileComponent } from './task-progress-tile.component';

describe('TaskProgressTileComponent', () => {
  let component: TaskProgressTileComponent;
  let fixture: ComponentFixture<TaskProgressTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskProgressTileComponent]
    });
    fixture = TestBed.createComponent(TaskProgressTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
