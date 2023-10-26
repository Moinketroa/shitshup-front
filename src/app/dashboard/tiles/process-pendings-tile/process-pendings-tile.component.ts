import { Component, Input } from '@angular/core';
import { NullYoutubePlaylistPreview, YoutubePlaylistPreview } from '../../../shared/models/youtube-playlist.model';
import { YoutubeService } from '../../../shared/services/youtube.service';
import { ProcessDialogComponent } from '../../../shared/dialogs/process-dialog/process-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'shitshup-process-pendings-tile',
  templateUrl: './process-pendings-tile.component.html',
  styleUrls: ['./process-pendings-tile.component.scss']
})
export class ProcessPendingsTileComponent {

    @Input()
    pendingPlaylistPreview: YoutubePlaylistPreview = new NullYoutubePlaylistPreview();

    constructor(private readonly youtubeService: YoutubeService,
                private readonly dialog: MatDialog,) {
    }

    process(): any {
        const dialogRef = this.dialog.open(ProcessDialogComponent, {
            data: { processOneVideo: false },
        });

        dialogRef.afterClosed()
            .pipe(
                filter(result => !!result),
                switchMap(result => this.youtubeService.processVideos(result))
            )
            .subscribe();
    }

}
