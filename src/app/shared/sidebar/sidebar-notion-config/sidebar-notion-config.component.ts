import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NotionConfigService } from '../../services/notion-config.service';
import { NotionConfig, NullNotionConfig } from '../../models/notion-config.model';
import { NotionConfigStore } from '../../stores/notion-config.store';
import { CreateNotionConfigDTO } from '../../dtos/create-notion-config.dto';
import { UpdateNotionConfigDTO } from '../../dtos/update-notion-config.dto';
import { combineLatest, of, switchMap } from 'rxjs';
import { NotionService } from '../../services/notion.service';
import { NotionDatabase, NullNotionDatabase } from '../../models/notion-database.model';

@Component({
  selector: 'shitshup-sidebar-notion-config',
  templateUrl: './sidebar-notion-config.component.html',
  styleUrls: ['./sidebar-notion-config.component.scss']
})
@UntilDestroy()
export class SidebarNotionConfigComponent implements OnInit {

    notionConfig: NotionConfig = new NullNotionConfig();
    mediaLibraryDatabase: NotionDatabase = new NullNotionDatabase();

    constructor(private readonly notionConfigService: NotionConfigService,
                private readonly notionService: NotionService,
                private readonly notionConfigStore: NotionConfigStore,
    ) {}

    ngOnInit() {
        this.notionConfigStore.notionConfig$
            .pipe(
                switchMap(notionConfig => {
                    const mediaLibrary$ = !!notionConfig.id
                        ? this.notionService.fetchMediaLibrary()
                        : of(new NullNotionDatabase());

                    return combineLatest([
                        of(notionConfig),
                        mediaLibrary$,
                    ]);
                }),
                untilDestroyed(this),
            )
            .subscribe(([notionConfig, mediaLibrary]) => {
                this.notionConfig = notionConfig;
                this.mediaLibraryDatabase = mediaLibrary;
            });
    }

    createNotionConfig(newNotionConfig: CreateNotionConfigDTO): void {
        this.notionConfigStore.createNotionConfig(newNotionConfig)
    }

    updateNotionConfig(updateNotionConfig: UpdateNotionConfigDTO): void {
        this.notionConfigStore.updateNotionConfig(this.notionConfig.id!, updateNotionConfig)
    }

}
