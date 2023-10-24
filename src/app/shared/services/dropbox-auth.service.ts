import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { UrlWrapper } from '../models/url-wrapper.model';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { DropboxUser, NullDropboxUser } from '../models/dropbox-user.model';

@Injectable({
    providedIn: 'root',
})
export class DropboxAuthService {

    private readonly baseUrl = environment.apiUrl;
    private readonly path: string = 'auth'

    constructor(private readonly http: HttpClient) {
    }

    getGeneratedAuthUrl(): Observable<string> {
        const endPoint = 'dropbox/generate-auth-url';

        return this.http.get<UrlWrapper>(`${ this.baseUrl }/${ this.path }/${ endPoint }`)
            .pipe(
                map((urlWrapper: UrlWrapper) => (urlWrapper.url)),
            );
    }

    callback(code: string): Observable<any> {
        const endPoint = 'dropbox/callback';
        const params = { code: code };

        return this.http.get<UrlWrapper>(`${ this.baseUrl }/${ this.path }/${ endPoint }`,
            {
                params: params,
            }
        );
    }

    getCurrentUser(): Observable<DropboxUser> {
        const endPoint = 'dropbox/me';

        return this.http.get<DropboxUser>(`${ this.baseUrl }/${ this.path }/${ endPoint }`)
            .pipe(
                catchError((err) => {
                    return of(new NullDropboxUser());
                }),
            );
    }

    logout(): Observable<DropboxUser> {
        const endPoint = 'dropbox/logout';

        return this.http.get<DropboxUser>(`${ this.baseUrl }/${ this.path }/${ endPoint }`);
    }
}
