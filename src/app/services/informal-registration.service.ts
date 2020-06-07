import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InformalPerson } from '../models/informal-person';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { FormRI } from '../models/form-ri';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InformalRegistrationService {

  constructor(private http: HttpClient) { }
  private BASE_URL = env.apiUrl+'/form';
  private BASE_URL2 = '/assets/pruebaservicio.json';

  searchInformationIP(informalPerson: InformalPerson): Observable<any> {
    return this.http.post<any>(this.BASE_URL, informalPerson).pipe(retry(2));
  }
  searchInformationIPGet(informalPerson: InformalPerson): Observable<any> {
    return this.http.get<FormRI>(this.BASE_URL2).pipe(retry(2));
  }
}
