import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  baseApiUrl: string = "http://122.170.12.63:90/api"
  constructor(private http: HttpClient) { }

  public loginUser(loginPayload: any): Observable<any> {
    return this.http.post(`${this.baseApiUrl}/auth/login`, loginPayload);
  }

  public getUrganizationList(): Observable<any> {
    return this.http.get(`${this.baseApiUrl}/Organization/getAllOrganization`);
  }

  public addUrganization(addUrganizationPayload: any): Observable<any> {
    return this.http.post(`${this.baseApiUrl}/Organization/addOrganization`, addUrganizationPayload);
  }


}
