import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessProgressTileComponent } from './process-progress-tile.component';

describe('ProcessProgressTileComponent', () => {
  let component: ProcessProgressTileComponent;
  let fixture: ComponentFixture<ProcessProgressTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessProgressTileComponent]
    });
    fixture = TestBed.createComponent(ProcessProgressTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
