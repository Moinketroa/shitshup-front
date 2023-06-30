import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionPrerequisiteDialogComponent } from './notion-prerequisite-dialog.component';

describe('NotionPrerequisiteDialogComponent', () => {
  let component: NotionPrerequisiteDialogComponent;
  let fixture: ComponentFixture<NotionPrerequisiteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotionPrerequisiteDialogComponent]
    });
    fixture = TestBed.createComponent(NotionPrerequisiteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
