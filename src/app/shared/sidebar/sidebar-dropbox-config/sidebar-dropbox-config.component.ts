import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DropboxUser, NullDropboxUser } from '../../models/dropbox-user.model';
import { DropboxAuthService } from '../../services/dropbox-auth.service';
import { DropboxUserStore } from '../../stores/dropbox-user.store';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'shitshup-sidebar-dropbox-config',
  templateUrl: './sidebar-dropbox-config.component.html',
  styleUrls: ['./sidebar-dropbox-config.component.scss']
})
@UntilDestroy()
export class SidebarDropboxConfigComponent implements OnInit{

    private readonly POPUP_NAME: string = 'Shitshup Dropbox Login';

    dropboxUser: DropboxUser = new NullDropboxUser();

    constructor(private readonly dropboxAuthService: DropboxAuthService,
                private readonly dropboxUserStore: DropboxUserStore,
                private readonly popupService: PopupService,) {
    }

    ngOnInit() {
        this.dropboxUserStore.dropboxUser$
            .pipe(untilDestroyed(this))
            .subscribe(dropboxUser => {
                this.dropboxUser = dropboxUser;
            });
    }

    updateDropboxUserCallback = () => {
        this.dropboxUserStore.updateDropboxUser();
    }

    auth() {
        this.dropboxAuthService.getGeneratedAuthUrl()
            .subscribe(dropboxAuthUrl => {
                const loginPopup = this.popupService.openPopup(dropboxAuthUrl, this.POPUP_NAME)!;
                this.popupService.handlePopup(loginPopup, this.updateDropboxUserCallback);
            });
    }

    logout() {

    }

}
