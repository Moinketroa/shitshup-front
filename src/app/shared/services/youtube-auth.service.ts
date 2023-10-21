import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NullYoutubeUser, YoutubeUser } from '../models/youtube-user.model';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../environment/environment';
import { UrlWrapper } from '../models/url-wrapper.model';

@Injectable({
    providedIn: 'root',
})
export class YoutubeAuthService {

    private readonly baseUrl = environment.apiUrl;
    private readonly path: string = 'auth'

    constructor(private readonly http: HttpClient) {
    }

    getGeneratedAuthUrl(): Observable<string> {
        const endPoint = 'youtube/generate-auth-url';

        return this.http.get<UrlWrapper>(`${this.baseUrl}/${this.path}/${endPoint}`)
            .pipe(
                map((urlWrapper: UrlWrapper) => (urlWrapper.url))
            );
    }

    getCurrentUser(): Observable<YoutubeUser> {
        const endPoint = 'youtube/me';

        return this.http.get<YoutubeUser>(`${this.baseUrl}/${this.path}/${endPoint}`)
            .pipe(
                catchError((err) => {
                    return of(new NullYoutubeUser());
                })
            );
    }

    logout(): Observable<any> {
        const endPoint = 'youtube/logout';

        return this.http.get<any>(`${this.baseUrl}/${this.path}/${endPoint}`);
    }
}
