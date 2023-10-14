import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskDto } from '../dtos/task.dto';

@Injectable({
    providedIn: 'root',
})
export class TaskService {

    private readonly baseUrl = environment.apiUrl;
    private readonly path: string = 'tasks'

    constructor(private readonly http: HttpClient) {
    }

    getTasks(): Observable<TaskDto[]> {
        return this.http.get<TaskDto[]>(`${ this.baseUrl }/${ this.path }`);
    }
}
