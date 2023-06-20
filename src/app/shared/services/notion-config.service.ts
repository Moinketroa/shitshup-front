import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { map, Observable } from 'rxjs';
import { NotionConfig, NullNotionConfig } from '../models/notion-config.model';
import { CreateNotionConfigDTO } from '../dtos/create-notion-config.dto';
import { UpdateNotionConfigDTO } from '../dtos/update-notion-config.dto';

@Injectable({
    providedIn: 'root',
})
export class NotionConfigService {

    private readonly baseUrl = environment.apiUrl;
    private readonly path: string = 'notion/config'

    constructor(private readonly http: HttpClient) {
    }

    getCurrentConfig(): Observable<NotionConfig> {
        return this.http.get<NotionConfig>(`${this.baseUrl}/${this.path}`)
            .pipe(
                map(notionConfig => notionConfig ?? new NullNotionConfig())
            );
    }

    saveNotionConfig(createNotionConfig: CreateNotionConfigDTO): Observable<NotionConfig> {
        return this.http.post<NotionConfig>(
            `${this.baseUrl}/${this.path}`,
            createNotionConfig
        );
    }

    updateNotionConfig(id: string, updateNotionConfig: UpdateNotionConfigDTO): Observable<NotionConfig> {
        return this.http.patch<NotionConfig>(
            `${this.baseUrl}/${this.path}/${id}`,
            updateNotionConfig
        )
    }
}
