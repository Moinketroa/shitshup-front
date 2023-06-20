import { TestBed } from '@angular/core/testing';

import { NotionConfigService } from './notion-config.service';

describe('NotionConfigService', () => {
  let service: NotionConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotionConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
