import { TestBed } from '@angular/core/testing';

import { WarningTreeNodeMapperService } from './warning-tree-node.mapper.service';

describe('WarningTreeNodeMapperService', () => {
  let service: WarningTreeNodeMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarningTreeNodeMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
