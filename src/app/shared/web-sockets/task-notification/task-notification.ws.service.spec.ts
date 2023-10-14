import { TestBed } from '@angular/core/testing';

import { TaskNotificationWsService } from './task-notification.ws.service';

describe('TaskNotificationWsService', () => {
  let service: TaskNotificationWsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskNotificationWsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
