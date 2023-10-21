import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropboxUserIconComponent } from './dropbox-user-icon.component';

describe('DropboxUserIconComponent', () => {
  let component: DropboxUserIconComponent;
  let fixture: ComponentFixture<DropboxUserIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropboxUserIconComponent]
    });
    fixture = TestBed.createComponent(DropboxUserIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
