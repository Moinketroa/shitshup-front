import { TestBed } from '@angular/core/testing';

import { DropboxAuthService } from './dropbox-auth.service';

describe('DropboxAuthService', () => {
  let service: DropboxAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropboxAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
