import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { NotionDatabase, NullNotionDatabase } from '../models/notion-database.model';
import { environment } from '../../../environment/environment';

@Injectable({
    providedIn: 'root',
})
export class NotionService {

    private readonly baseUrl = environment.apiUrl;
    private readonly path: string = 'notion'

    constructor(private readonly http: HttpClient) {
    }

    fetchMediaLibrary(): Observable<NotionDatabase> {
        const endPoint = 'mediaLibrary';

        return this.http.get<NotionDatabase>(`${this.baseUrl}/${this.path}/${endPoint}`)
            .pipe(
                map(notionDatabase => notionDatabase ?? new NullNotionDatabase())
            );
    }

    createMediaLibrary(): Observable<NotionDatabase> {
        const endPoint = 'mediaLibrary';

        return this.http.post<NotionDatabase>(`${this.baseUrl}/${this.path}/${endPoint}`, {})
            .pipe(
                map(notionDatabase => notionDatabase ?? new NullNotionDatabase())
            );
    }
}
