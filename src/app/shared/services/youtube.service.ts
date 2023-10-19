import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import {
    NullYoutubePlaylistPreview,
    YoutubePlaylistPreview,
    NullYoutubeShitshupPlaylists,
    YoutubeShitshupPlaylists,
} from '../models/youtube-playlist.model';

@Injectable({
    providedIn: 'root',
})
export class YoutubeService {

    private readonly baseUrl = environment.apiUrl;
    private readonly path: string = 'youtube';

    constructor(private readonly http: HttpClient) {
    }

    fetchShitshupPlaylists(): Observable<YoutubeShitshupPlaylists> {
        const endPoint = 'playlists';

        return this.http.get<YoutubeShitshupPlaylists>(`${this.baseUrl}/${this.path}/${endPoint}`)
            .pipe(
                map(youtubeShitshupPlaylists => youtubeShitshupPlaylists ?? new NullYoutubeShitshupPlaylists()),
                catchError((err) => {
                    return of(new NullYoutubeShitshupPlaylists());
                })
            );
    }

    createShitshupPlaylists(): Observable<YoutubeShitshupPlaylists> {
        const endPoint = 'playlists';

        return this.http.post<YoutubeShitshupPlaylists>(`${this.baseUrl}/${this.path}/${endPoint}`, {})
            .pipe(
                map(youtubeShitshupPlaylists => youtubeShitshupPlaylists ?? new NullYoutubeShitshupPlaylists())
            );
    }

    fetchPendingPlaylistPreview(): Observable<YoutubePlaylistPreview> {
        const endPoint = 'pending/preview';

        return this.http.get<YoutubePlaylistPreview>(`${this.baseUrl}/${this.path}/${endPoint}`)
            .pipe(
                map(pendingPlaylistPreview => pendingPlaylistPreview ?? new NullYoutubePlaylistPreview()),
                catchError((err) => {
                    return of(new NullYoutubePlaylistPreview());
                })
            );
    }

    processPending(): Observable<any> {
        const endPoint = 'process/pending';

        return this.http.get(`${this.baseUrl}/${this.path}/${endPoint}`);
    }

    processOneVideo(videoId: string): Observable<any> {
        const endPoint = `process/video/${videoId}`;

        return this.http.get(`${this.baseUrl}/${this.path}/${endPoint}`);
    }
}
