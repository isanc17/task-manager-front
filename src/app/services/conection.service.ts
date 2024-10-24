import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroments';
import { ServiceObject } from '../models/service-object';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  private endPoint: string = environment.apiExpress;

  constructor(private http: HttpClient) {}

  getAction(serviceObject: ServiceObject, params = {}): Observable<ServiceObject> {
    const url = `${this.endPoint}/${serviceObject.entity}`;
    return this.http.get<ServiceObject>(url, {params}).pipe(
      catchError( e  => {
        throw e;
      })
    );
  }

  postAction(serviceObject: ServiceObject, params = {}): Observable<ServiceObject> {
    const url = `${this.endPoint}/${serviceObject.entity}`;
    return this.http.post<ServiceObject>(url, params).pipe(
      catchError( e  => {
        throw e;
      })
    );
  }

}
