import { TestBed } from '@angular/core/testing';

import { TaskTreeNodeMapperService } from './task-tree-node.mapper.service';

describe('TaskTreeNodeMapperService', () => {
  let service: TaskTreeNodeMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskTreeNodeMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
