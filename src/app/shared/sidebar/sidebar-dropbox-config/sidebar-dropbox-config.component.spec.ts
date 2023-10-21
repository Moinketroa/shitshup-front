import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDropboxConfigComponent } from './sidebar-dropbox-config.component';

describe('SidebarDropboxConfigComponent', () => {
  let component: SidebarDropboxConfigComponent;
  let fixture: ComponentFixture<SidebarDropboxConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarDropboxConfigComponent]
    });
    fixture = TestBed.createComponent(SidebarDropboxConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
