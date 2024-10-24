import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast/toast.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastService : ToastService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('authToken');

    // Clonar la solicitud para agregar el encabezado de autorización si existe un token
    let modifiedReq = request;
    if (token) {
      modifiedReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error HTTP:', error);
          if(error.status == 401){
            this.toastService.openToast(error.name, error.message, 'ERROR');
            this.router.navigateByUrl(`/login`);
          }

        return throwError(() => error);
      })
    );
  }
}
