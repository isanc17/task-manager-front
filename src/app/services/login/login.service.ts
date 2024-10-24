import { Injectable } from '@angular/core';
import { Observable, map, catchError } from 'rxjs';
import { ServiceObject } from 'src/app/models/service-object';
import { ConectionService } from '../conection.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private webApi: ConectionService) {}

  getAuth(params = {}): Observable<any> {
    const servObj = new ServiceObject(
      'login'
    );
    return this.webApi.getAction(servObj, params).pipe(
      map((res) => {
        if (!res.status) throw new Error(res.message);
        return res;
      }),
      catchError((e) => {
        throw e;
      })
    );
  }
}
