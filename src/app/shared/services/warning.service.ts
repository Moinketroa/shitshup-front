import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WarningDto } from '../dtos/warning.dto';

@Injectable({
    providedIn: 'root',
})
export class WarningService {

    private readonly baseUrl = environment.apiUrl;
    private readonly path: string = 'warnings'

    constructor(private readonly http: HttpClient) {
    }

    getWarnings(): Observable<WarningDto[]> {
        return this.http.get<WarningDto[]>(`${ this.baseUrl }/${ this.path }`);
    }

    deleteWarning(warningId: string): Observable<void> {
        return this.http.delete<void>(`${ this.baseUrl }/${ this.path }/${ warningId }`)
    }

}
