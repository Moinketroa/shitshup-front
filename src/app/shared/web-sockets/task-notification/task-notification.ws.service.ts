import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../../../environment/environment';
import { AuthService } from '../../services/auth.service';
import { isNullOrUndefined } from '../../util/util';
import { TaskDto } from '../../dtos/task.dto';

@Injectable({
    providedIn: 'root',
})
export class TaskNotificationWsService {

    private readonly EVENT_NAME: string = 'tasks-notifications';
    private readonly SOCKET_URL: string = environment.socketUrl;
    private readonly SOCKET_PATH: string = 'tasks-notifications';

    private _socket!: Socket;

    constructor(private readonly authService: AuthService) {
    }

    sendMessage() {
        this.socket.emit(this.EVENT_NAME);
    }

    onMessage() {
        return this.socket.fromEvent<TaskDto>(this.EVENT_NAME);
    }

    private get socket(): Socket {
        if (isNullOrUndefined(this._socket)) {
            this._socket = new Socket({
                url: this.SOCKET_URL,
                options: {
                    query: { token: this.authService.getToken() }, // Include the authentication token
                },
            })
        }

        return this._socket;
    }
}
