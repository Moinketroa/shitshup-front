import { TestBed } from '@angular/core/testing';

import { CamelotKeyMatcherService } from './camelot-key-matcher.service';

describe('CamelotKeyMatcherService', () => {
  let service: CamelotKeyMatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamelotKeyMatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
