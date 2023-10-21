import { Component, OnInit } from '@angular/core';
import { NullYoutubeUser, YoutubeUser } from '../shared/models/youtube-user.model';
import { UserStore } from '../shared/stores/user.store';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NotionConfigStore } from '../shared/stores/notion-config.store';
import { NotionConfig, NullNotionConfig } from '../shared/models/notion-config.model';
import { DropboxUser, NullDropboxUser } from '../shared/models/dropbox-user.model';
import { DropboxUserStore } from '../shared/stores/dropbox-user.store';
import { isDefined } from '../shared/util/util';

@Component({
  selector: 'shitshup-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@UntilDestroy()
export class HeaderComponent implements OnInit {

    youtubeUser: YoutubeUser = new NullYoutubeUser();
    drobpoxUser: DropboxUser = new NullDropboxUser();
    notionConfig: NotionConfig = new NullNotionConfig();

    showNotionAndDropbox: boolean = false;

    constructor(private readonly userStore: UserStore,
                private readonly notionConfigStore: NotionConfigStore,
                private readonly dropboxUserStore: DropboxUserStore,
                private readonly sidebarService: SidebarService) {
    }

    ngOnInit() {
        this.userStore.youtubeUser$
            .pipe(untilDestroyed(this))
            .subscribe((youtubeUser: YoutubeUser) => {
                this.youtubeUser = youtubeUser;

                this.showNotionAndDropbox = isDefined(this.youtubeUser.id);
            })

        this.notionConfigStore.notionConfig$
            .pipe(untilDestroyed(this))
            .subscribe((notionConfig: NotionConfig) => {
                this.notionConfig = notionConfig;
            })

        this.dropboxUserStore.dropboxUser$
            .pipe(untilDestroyed(this))
            .subscribe((dropboxUser: DropboxUser) => {
                this.drobpoxUser = dropboxUser;
            })
    }

    openYoutubeAuthSidebar() {
        this.sidebarService.openYoutubeConfig();
    }

    openNotionConfigSidebar() {
        this.sidebarService.openNotionConfig();
    }

    openDropboxAuthSidebar() {
        this.sidebarService.openDropboxConfig();
    }
}
