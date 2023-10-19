import { TestBed } from '@angular/core/testing';

import { WarningNotificationWsService } from './warning-notification.ws.service';

describe('WarningNotificationWsService', () => {
  let service: WarningNotificationWsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarningNotificationWsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
