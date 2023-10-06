import { Component, Input } from '@angular/core';
import { NullYoutubePlaylistPreview, YoutubePlaylistPreview } from '../../../shared/models/youtube-playlist.model';
import { YoutubeService } from '../../../shared/services/youtube.service';

@Component({
  selector: 'shitshup-process-pendings-tile',
  templateUrl: './process-pendings-tile.component.html',
  styleUrls: ['./process-pendings-tile.component.scss']
})
export class ProcessPendingsTileComponent {

    @Input()
    pendingPlaylistPreview: YoutubePlaylistPreview = new NullYoutubePlaylistPreview();

    constructor(private readonly youtubeService: YoutubeService) {
    }

    process(): any {
        this.youtubeService.processPending()
            .subscribe();
    }

}
