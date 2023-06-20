import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionConfigIconComponent } from './notion-config-icon.component';

describe('NotionConfigIconComponent', () => {
  let component: NotionConfigIconComponent;
  let fixture: ComponentFixture<NotionConfigIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotionConfigIconComponent]
    });
    fixture = TestBed.createComponent(NotionConfigIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
