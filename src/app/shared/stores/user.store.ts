import { Injectable } from '@angular/core';
import { NullYoutubeUser, YoutubeUser } from '../models/youtube-user.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { YoutubeAuthService } from '../services/youtube-auth.service';

@Injectable({
    providedIn: 'root',
})
export class UserStore {

    private readonly _youtubeUserSubject: Subject<YoutubeUser> = new BehaviorSubject(new NullYoutubeUser());
    private _currentYoutubeUser: YoutubeUser = new NullYoutubeUser();

    constructor(private readonly youtubeAuthService: YoutubeAuthService) {
        this.bindCurrentYoutubeUser();
        this.initYoutubeUser();
    }

    get youtubeUser$(): Observable<YoutubeUser> {
        return this._youtubeUserSubject.asObservable();
    }

    updateYoutubeUser(): void {
        this.youtubeAuthService.getCurrentUser()
            .subscribe(newYoutubeUser => {
                if (!!this._currentYoutubeUser.id || !!newYoutubeUser.id) {
                    this._youtubeUserSubject.next(newYoutubeUser);
                }
            });
    }

    private bindCurrentYoutubeUser(): void {
        this._youtubeUserSubject.asObservable()
            .subscribe(newYoutubeUser => {
                this._currentYoutubeUser = newYoutubeUser;
            });
    }

    private initYoutubeUser(): void {
        this.updateYoutubeUser();
    }

}
