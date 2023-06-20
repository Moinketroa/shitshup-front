import { Component, OnInit } from '@angular/core';
import { NullYoutubeUser, YoutubeUser } from '../../shared/models/youtube-user.model';
import { UserStore } from '../../shared/stores/user.store';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NotionConfigStore } from '../../shared/stores/notion-config.store';
import { NotionConfig, NullNotionConfig } from '../../shared/models/notion-config.model';

@Component({
  selector: 'shitshup-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@UntilDestroy()
export class HeaderComponent implements OnInit {

    youtubeUser: YoutubeUser = new NullYoutubeUser();
    notionConfig: NotionConfig = new NullNotionConfig();

    constructor(private readonly userStore: UserStore,
                private readonly notionConfigStore: NotionConfigStore,
                private readonly sidebarService: SidebarService) {
    }

    ngOnInit() {
        this.userStore.youtubeUser$
            .pipe(untilDestroyed(this))
            .subscribe((youtubeUser: YoutubeUser) => {
                this.youtubeUser = youtubeUser;
            })

        this.notionConfigStore.notionConfig$
            .pipe(untilDestroyed(this))
            .subscribe((notionConfig: NotionConfig) => {
                this.notionConfig = notionConfig;
            })
    }

    openYoutubeAuthSidebar() {
        this.sidebarService.openYoutubeConfig();
    }

    openNotionConfigSidebar() {
        this.sidebarService.openNotionConfig();
    }
}
