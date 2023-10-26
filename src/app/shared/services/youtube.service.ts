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
import { ProcessRequest } from '../dtos/process-request.dto';

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

    processVideos(processRequest: ProcessRequest): Observable<any> {
        const endPoint = 'process';

        return this.http.post(`${this.baseUrl}/${this.path}/${endPoint}`, processRequest);
    }
}
