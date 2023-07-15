import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessPendingsTileComponent } from './process-pendings-tile.component';

describe('ProcessPendingsTileComponent', () => {
  let component: ProcessPendingsTileComponent;
  let fixture: ComponentFixture<ProcessPendingsTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessPendingsTileComponent]
    });
    fixture = TestBed.createComponent(ProcessPendingsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
