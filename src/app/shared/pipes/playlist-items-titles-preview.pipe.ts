import { Pipe, PipeTransform } from '@angular/core';
import { YoutubePlaylistPreview } from '../models/youtube-playlist.model';

@Pipe({
    name: 'playlistItemsTitlesPreview',
    standalone: true,
})
export class PlaylistItemsTitlesPreviewPipe implements PipeTransform {

    transform(playlistPreview: YoutubePlaylistPreview): string {
        if (playlistPreview.numberOfItems <= 0) {
            return '';
        }

        const titlesPreview = playlistPreview.items
            .map(playlistItem => playlistItem.title)
            .join(', ');

        if (playlistPreview.numberOfItems > playlistPreview.items.length) {
            return titlesPreview.concat('... and more !');
        } else {
            return titlesPreview;
        }
    }

}
