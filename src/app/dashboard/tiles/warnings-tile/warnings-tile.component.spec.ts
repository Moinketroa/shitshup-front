import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningsTileComponent } from './warnings-tile.component';

describe('WarningsTileComponent', () => {
  let component: WarningsTileComponent;
  let fixture: ComponentFixture<WarningsTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarningsTileComponent]
    });
    fixture = TestBed.createComponent(WarningsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
