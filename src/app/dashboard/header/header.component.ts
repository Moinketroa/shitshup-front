import { Component, OnInit } from '@angular/core';
import { NullYoutubeUser, YoutubeUser } from '../../shared/models/youtube-user.model';
import { UserStore } from '../../shared/stores/user.store';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'shitshup-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@UntilDestroy()
export class HeaderComponent implements OnInit {

    youtubeUser: YoutubeUser = new NullYoutubeUser();

    constructor(private readonly userStore: UserStore,
                private readonly sidebarService: SidebarService) {
    }

    ngOnInit() {
        this.userStore.youtubeUser$
            .pipe(untilDestroyed(this))
            .subscribe((youtubeUser: YoutubeUser) => {
                this.youtubeUser = youtubeUser;
            })
    }

    openYoutubeAuthSidebar() {
        this.sidebarService.openYoutubeConfig();
    }
}
