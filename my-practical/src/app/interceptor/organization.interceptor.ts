import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrganizationInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenString  = localStorage.getItem('token');
    if (tokenString ) {
      const token = JSON.parse(tokenString);
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token.auth_token}`
        }
      });
    }

    return next.handle(request);
  }
}
