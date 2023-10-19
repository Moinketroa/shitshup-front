import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessOneVideoTileComponent } from './process-one-video-tile.component';

describe('ProcessOneVideoTileComponent', () => {
  let component: ProcessOneVideoTileComponent;
  let fixture: ComponentFixture<ProcessOneVideoTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessOneVideoTileComponent]
    });
    fixture = TestBed.createComponent(ProcessOneVideoTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
