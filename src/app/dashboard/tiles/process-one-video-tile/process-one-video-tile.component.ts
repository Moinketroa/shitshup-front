import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { isNullOrUndefined } from '../../../shared/util/util';
import { YoutubeService } from '../../../shared/services/youtube.service';

@Component({
  selector: 'shitshup-process-one-video-tile',
  templateUrl: './process-one-video-tile.component.html',
  styleUrls: ['./process-one-video-tile.component.scss']
})
export class ProcessOneVideoTileComponent {

    private readonly YOUTUBE_URL_OR_ID_REGEX: RegExp = new RegExp(`^(https://www\\.youtube\\.com/watch\\?v=)?.{11}$`)

    youtubeUrlOrIdControl = new FormControl(
        '',
        [Validators.pattern(this.YOUTUBE_URL_OR_ID_REGEX)],
    );

    constructor(private readonly youtubeService: YoutubeService) {
    }

    getErrorMessage(): string {
        return this.youtubeUrlOrIdControl.hasError('pattern') ? 'Not a valid URL or video ID' : '';
    }

    processOneVideo(): void {
        const videoUrlOrId: string | null = this.youtubeUrlOrIdControl.value;

        if (isNullOrUndefined(videoUrlOrId) || videoUrlOrId.trim() === '') {
            return;
        } else {
            this.youtubeService.processOneVideo(videoUrlOrId.slice(-11))
                .subscribe(() => {
                    this.youtubeUrlOrIdControl.reset();
                })
        }
    }
}
