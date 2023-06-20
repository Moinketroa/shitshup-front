import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNotionConfigComponent } from './sidebar-notion-config.component';

describe('SidebarNotionConfigComponent', () => {
  let component: SidebarNotionConfigComponent;
  let fixture: ComponentFixture<SidebarNotionConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarNotionConfigComponent]
    });
    fixture = TestBed.createComponent(SidebarNotionConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
