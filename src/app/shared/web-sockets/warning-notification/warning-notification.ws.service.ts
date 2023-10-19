import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../../../environment/environment';
import { AuthService } from '../../services/auth.service';
import { isNullOrUndefined } from '../../util/util';
import { WarningDto } from '../../dtos/warning.dto';

@Injectable({
    providedIn: 'root',
})
export class WarningNotificationWsService {

    private readonly EVENT_NAME: string = 'warnings-notifications';
    private readonly SOCKET_URL: string = environment.warningNotificationSocketUrl;
    private readonly SOCKET_PATH: string = 'warnings-notifications';

    private _socket!: Socket;

    constructor(private readonly authService: AuthService) {
    }

    sendMessage() {
        this.socket.emit(this.EVENT_NAME);
    }

    onMessage() {
        return this.socket.fromEvent<WarningDto>(this.EVENT_NAME);
    }

    private get socket(): Socket {
        if (isNullOrUndefined(this._socket)) {
            this._socket = new Socket({
                url: this.SOCKET_URL,
                options: {
                    query: { token: this.authService.getToken() },
                },
            })
        }

        return this._socket;
    }
}
