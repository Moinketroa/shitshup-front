import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcessDto } from '../dtos/process.dto';
import { ProcessRequest } from '../dtos/process-request.dto';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

    private readonly baseUrl = environment.apiUrl;
    private readonly path: string = 'vertical-process';

    constructor(private readonly http: HttpClient) {
    }

    getProcesses(): Observable<ProcessDto[]> {
        return this.http.get<ProcessDto[]>(`${ this.baseUrl }/${ this.path }`);
    }

    triggerProcess(processRequest: ProcessRequest): Observable<any> {
        const endPoint = 'trigger';

        return this.http.post(`${this.baseUrl}/${this.path}/${endPoint}`, processRequest);
    }
}
