import { Component, OnInit } from '@angular/core';
import { NotionService } from '../shared/services/notion.service';
import { YoutubeService } from '../shared/services/youtube.service';
import { combineLatest, mergeMap, of } from 'rxjs';
import {
    NullYoutubePlaylistPreview,
    NullYoutubeShitshupPlaylists,
    YoutubePlaylistPreview,
} from '../shared/models/youtube-playlist.model';
import { UserStore } from '../shared/stores/user.store';
import { NotionConfigStore } from '../shared/stores/notion-config.store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
    selector: 'shitshup-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ],
})
@UntilDestroy()
export class DashboardComponent implements OnInit {

    showWelcome: boolean = true;

    showPrerequisites: boolean = false;
    showNotionPrerequisite: boolean = false;
    showYoutubePrerequisite: boolean = false;
    showProcessOneVideo: boolean = false;
    showProcessProgress: boolean = false;

    showProcessPendings: boolean = false;
    pendingPlaylistPreview: YoutubePlaylistPreview = new NullYoutubePlaylistPreview();

    constructor(private readonly notionService: NotionService,
                private readonly youtubeService: YoutubeService,
                private readonly userStore: UserStore,
                private readonly notionConfigStore: NotionConfigStore,
    ) {
    }

    ngOnInit() {
        combineLatest([
            this.notionConfigStore.notionConfig$,
            this.userStore.youtubeUser$,
        ])
            .pipe(
                mergeMap(
                    ([ notionConfig, youtubeUser ]) => combineLatest([
                        of(notionConfig),
                        of(youtubeUser),
                        this.notionService.fetchMediaLibrary(),
                        this.youtubeService.fetchShitshupPlaylists(),
                    ]),
                ),
                untilDestroyed(this),
            ).subscribe(([ notionConfig, youtubeUser, mediaLibrary, youtubePlaylists ]) => {
            this.showNotionPrerequisite = !mediaLibrary.id;
            this.showYoutubePrerequisite = !!youtubeUser.id && youtubePlaylists instanceof NullYoutubeShitshupPlaylists;

            this.showPrerequisites = this.showNotionPrerequisite || this.showYoutubePrerequisite;
        });

        this.userStore.youtubeUser$
            .pipe(
                mergeMap((youtubeUser) => combineLatest([
                        of(youtubeUser),
                        this.youtubeService.fetchPendingPlaylistPreview(),
                    ]),
                ),
                untilDestroyed(this),
            )
            .subscribe(([youtubeUser, pendingPlaylistPreview]) => {
                this.showProcessPendings = pendingPlaylistPreview.numberOfItems !== 0;
                this.pendingPlaylistPreview = pendingPlaylistPreview;
            });

        this.userStore.youtubeUser$
            .subscribe(youtubeUser => {
                this.showWelcome = !youtubeUser.id;
                this.showProcessOneVideo = !!youtubeUser.id;
                this.showProcessProgress = !!youtubeUser.id;
            })
    }

}
