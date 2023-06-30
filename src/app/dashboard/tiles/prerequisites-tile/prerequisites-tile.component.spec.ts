import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrerequisitesTileComponent } from './prerequisites-tile.component';

describe('PrerequisitesTileComponent', () => {
  let component: PrerequisitesTileComponent;
  let fixture: ComponentFixture<PrerequisitesTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrerequisitesTileComponent]
    });
    fixture = TestBed.createComponent(PrerequisitesTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
