import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { Socket } from 'ngx-socket-io';
import { AuthService } from '../../services/auth.service';
import { isNullOrUndefined } from '../../util/util';
import { ProcessDto } from '../../dtos/process.dto';

@Injectable({
  providedIn: 'root'
})
export class VerticalProcessNotificationWsService {

    private readonly EVENT_NAME: string = 'vertical-process-notifications';
    private readonly SOCKET_URL: string = environment.verticalProcessNotificationSocketUrl;
    private readonly SOCKET_PATH: string = 'vertical-process-notifications';

    private _socket!: Socket;

    constructor(private readonly authService: AuthService) {
    }

    sendMessage() {
        this.socket.emit(this.EVENT_NAME);
    }

    onMessage() {
        return this.socket.fromEvent<ProcessDto>(this.EVENT_NAME);
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
