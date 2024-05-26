import { TestBed } from '@angular/core/testing';

import { VerticalProcessNotificationWsService } from './vertical-process-notification.ws.service';

describe('VerticalProcessNotificationWsService', () => {
  let service: VerticalProcessNotificationWsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerticalProcessNotificationWsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
