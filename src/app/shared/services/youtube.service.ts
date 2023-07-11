import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { NullYoutubeShitshupPlaylists, YoutubeShitshupPlaylists } from '../models/youtube-playlist.model';

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
                map(youtubeShitshupPlaylists => youtubeShitshupPlaylists ?? new NullYoutubeShitshupPlaylists())
            );
    }

    createShitshupPlaylists(): Observable<YoutubeShitshupPlaylists> {
        const endPoint = 'playlists';

        return this.http.post<YoutubeShitshupPlaylists>(`${this.baseUrl}/${this.path}/${endPoint}`, {})
            .pipe(
                map(youtubeShitshupPlaylists => youtubeShitshupPlaylists ?? new NullYoutubeShitshupPlaylists())
            );
    }

}
