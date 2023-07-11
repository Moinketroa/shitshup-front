import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePrerequisiteDialogComponent } from './youtube-prerequisite-dialog.component';

describe('YoutubePrerequisiteDialogComponent', () => {
  let component: YoutubePrerequisiteDialogComponent;
  let fixture: ComponentFixture<YoutubePrerequisiteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubePrerequisiteDialogComponent]
    });
    fixture = TestBed.createComponent(YoutubePrerequisiteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
