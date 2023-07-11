import { Component, OnInit } from '@angular/core';
import { NotionService } from '../shared/services/notion.service';
import { YoutubeService } from '../shared/services/youtube.service';
import { combineLatest } from 'rxjs';
import { NullYoutubeShitshupPlaylists } from '../shared/models/youtube-playlist.model';

@Component({
  selector: 'shitshup-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    showPrerequisites: boolean = false;
    showNotionPrerequisite: boolean = false;
    showYoutubePrerequisite: boolean = false;

    constructor(private readonly notionService: NotionService,
                private readonly youtubeService: YoutubeService,) {
    }

    ngOnInit() {
        combineLatest([
            this.notionService.fetchMediaLibrary(),
            this.youtubeService.fetchShitshupPlaylists()
        ]).subscribe(([mediaLibrary, youtubePlaylists]) => {
                this.showNotionPrerequisite = !mediaLibrary.id;
                this.showYoutubePrerequisite = youtubePlaylists instanceof NullYoutubeShitshupPlaylists;

                this.showPrerequisites = this.showNotionPrerequisite || this.showYoutubePrerequisite;
            });
    }

}
