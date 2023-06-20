import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { NotionConfig, NullNotionConfig } from '../models/notion-config.model';
import { NotionConfigService } from '../services/notion-config.service';
import { CreateNotionConfigDTO } from '../dtos/create-notion-config.dto';
import { UpdateNotionConfigDTO } from '../dtos/update-notion-config.dto';

@Injectable({
    providedIn: 'root',
})
export class NotionConfigStore {

    private readonly _notionConfigSubject: Subject<NotionConfig> = new BehaviorSubject(new NullNotionConfig());
    private _currentNotionConfig: NotionConfig = new NullNotionConfig();

    constructor(private readonly notionConfigService: NotionConfigService) {
        this.bindCurrentNotionConfig();
        this.initNotionConfig();
    }

    get notionConfig$(): Observable<NotionConfig> {
        return this._notionConfigSubject.asObservable();
    }

    createNotionConfig(createNotionConfig: CreateNotionConfigDTO): void {
        this.notionConfigService.saveNotionConfig(createNotionConfig)
            .subscribe(() => {
                    this.fetchAndUpdateNotionConfig();
            });
    }

    updateNotionConfig(id: string, updateNotionConfig: UpdateNotionConfigDTO): void {
        this.notionConfigService.updateNotionConfig(id, updateNotionConfig)
            .subscribe(() => {
                this.fetchAndUpdateNotionConfig();
            });
    }

    private bindCurrentNotionConfig(): void {
        this._notionConfigSubject.asObservable()
            .subscribe(newNotionConfig => {
                this._currentNotionConfig = newNotionConfig;
            });
    }

    private initNotionConfig(): void {
        this.fetchAndUpdateNotionConfig();
    }

    private fetchAndUpdateNotionConfig(): void {
        this.notionConfigService.getCurrentConfig()
            .subscribe(newNotionConfig => {
                if (!!this._currentNotionConfig.id || !!newNotionConfig.id) {
                    this._notionConfigSubject.next(newNotionConfig);
                }
            });
    }
}
