import { Injectable } from '@angular/core';
import { DropboxUser, NullDropboxUser } from '../models/dropbox-user.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { DropboxAuthService } from '../services/dropbox-auth.service';

@Injectable({
    providedIn: 'root',
})
export class DropboxUserStore {

    private readonly _dropboxUserSubject: Subject<DropboxUser> = new BehaviorSubject(new NullDropboxUser());
    private _currentDropboxUser: DropboxUser = new NullDropboxUser();

    constructor(private readonly dropboxAuthService: DropboxAuthService) {
        this.bindCurrentDropboxUser();
        this.initDropboxUser();
    }

    get dropboxUser$(): Observable<DropboxUser> {
        return this._dropboxUserSubject.asObservable();
    }

    updateDropboxUser(): void {
        this.dropboxAuthService.getCurrentUser()
            .subscribe(newDropboxUser => {
                if (!!this._currentDropboxUser.id || !!newDropboxUser.id) {
                    this._dropboxUserSubject
                        .next(newDropboxUser);
                }
            });
    }

    private bindCurrentDropboxUser(): void {
        this._dropboxUserSubject.asObservable()
            .subscribe(newDropboxUser => {
                this._currentDropboxUser = newDropboxUser;
            });
    }

    private initDropboxUser(): void {
        this.updateDropboxUser();
    }
}
