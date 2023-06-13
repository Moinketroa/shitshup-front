import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NullYoutubeUser, YoutubeUser } from '../../models/youtube-user.model';

@Component({
  selector: 'shitshup-youtube-user-icon',
  templateUrl: './youtube-user-icon.component.html',
  styleUrls: ['./youtube-user-icon.component.scss']
})
export class YoutubeUserIconComponent {

    @Input()
    youtubeUser: YoutubeUser = new NullYoutubeUser();

    @Output()
    click: EventEmitter<void> = new EventEmitter();

}
