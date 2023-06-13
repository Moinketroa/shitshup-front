import { Component, OnInit } from '@angular/core';
import { YoutubeAuthService } from '../../services/youtube-auth.service';
import { PopupService } from '../../services/popup.service';
import { UserStore } from '../../stores/user.store';
import { NullYoutubeUser, YoutubeUser } from '../../models/youtube-user.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'shitshup-sidebar-youtube-config',
  templateUrl: './sidebar-youtube-config.component.html',
  styleUrls: ['./sidebar-youtube-config.component.scss']
})
@UntilDestroy()
export class SidebarYoutubeConfigComponent implements OnInit{

    private readonly POPUP_NAME: string = 'Shitshup Youtube Login';

    youtubeUser: YoutubeUser = new NullYoutubeUser();

    constructor(private readonly youtubeAuthService: YoutubeAuthService,
                private readonly userStore: UserStore,
                private readonly popupService: PopupService) {
    }

    ngOnInit() {
        this.userStore.youtubeUser$
            .pipe(untilDestroyed(this))
            .subscribe(youtubeUser => {
                this.youtubeUser = youtubeUser;
            });
    }

    updateUserCallback = () => {
        this.userStore.updateYoutubeUser();
    }

    auth() {
        this.youtubeAuthService.getGeneratedAuthUrl()
            .subscribe(authUrl => {
                const loginPopup = this.popupService.openPopup(authUrl, this.POPUP_NAME)!;
                this.popupService.handlePopup(loginPopup, this.updateUserCallback);
            });
    }

    logout() {
        this.youtubeAuthService.logout()
            .subscribe(() => {
                this.updateUserCallback();
            })
    }

}
