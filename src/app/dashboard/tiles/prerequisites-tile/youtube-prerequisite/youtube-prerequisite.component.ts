import { Component } from '@angular/core';
import { filter, switchMap, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { YoutubeService } from '../../../../shared/services/youtube.service';
import {
    YoutubePrerequisiteDialogComponent,
} from '../../../../shared/dialogs/youtube-prerequisite-dialog/youtube-prerequisite-dialog.component';

@Component({
    selector: 'shitshup-youtube-prerequisite',
    templateUrl: './youtube-prerequisite.component.html',
    styleUrls: [ './youtube-prerequisite.component.scss' ],
})
export class YoutubePrerequisiteComponent {

    showProcessing: boolean = false;
    showDone: boolean = false;

    constructor(
        private readonly youtubeService: YoutubeService,
        private readonly dialog: MatDialog,
    ) {
    }

    createShitshupPlaylists(): void {
        const dialogRef = this.dialog.open(YoutubePrerequisiteDialogComponent);

        dialogRef.afterClosed()
            .pipe(
                filter(result => !!result),
                tap(() => (this.showProcessing = true)),
                switchMap(() => this.youtubeService.createShitshupPlaylists()),
            )
            .subscribe(() => {
                this.showProcessing = false;
                this.showDone = true;
            });
    }

}
