// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endPoints } from '../config/constants';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpService {
    constructor(private httpClient: HttpClient ) { }

    getActivities(): Observable<any> {
        return this.httpClient.get<any>(endPoints.activities_api)
    }

    getPatients(): Observable<any> {
        return this.httpClient.get<any>(endPoints.patients_api)
    }
}