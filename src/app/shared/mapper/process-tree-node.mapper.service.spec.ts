import { TestBed } from '@angular/core/testing';

import { ProcessTreeNodeMapperService } from './process-tree-node.mapper.service';

describe('ProcessTreeNodeMapperService', () => {
  let service: ProcessTreeNodeMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessTreeNodeMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
