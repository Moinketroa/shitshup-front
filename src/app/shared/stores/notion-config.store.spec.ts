import { TestBed } from '@angular/core/testing';

import { NotionConfigStore } from './notion-config.store';

describe('NotionConfigStore', () => {
    let service: NotionConfigStore;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NotionConfigStore);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
