import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePrerequisiteComponent } from './youtube-prerequisite.component';

describe('YoutubePrerequisiteComponent', () => {
  let component: YoutubePrerequisiteComponent;
  let fixture: ComponentFixture<YoutubePrerequisiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubePrerequisiteComponent]
    });
    fixture = TestBed.createComponent(YoutubePrerequisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
