import { TestBed } from '@angular/core/testing';

import { DropboxUserStore } from './dropbox-user.store';

describe('DropboxUserStore', () => {
  let service: DropboxUserStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropboxUserStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
