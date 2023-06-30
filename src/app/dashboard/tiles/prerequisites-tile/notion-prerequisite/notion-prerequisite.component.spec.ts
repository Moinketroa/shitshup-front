import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionPrerequisiteComponent } from './notion-prerequisite.component';

describe('NotionPrerequisiteComponent', () => {
  let component: NotionPrerequisiteComponent;
  let fixture: ComponentFixture<NotionPrerequisiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotionPrerequisiteComponent]
    });
    fixture = TestBed.createComponent(NotionPrerequisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
