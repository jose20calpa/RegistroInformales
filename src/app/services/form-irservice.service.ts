import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormRI } from '../models/form-ri';
import { environment } from "../../environments/environment";
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormIRServiceService {

  private BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getFormIR(): Observable<FormRI> {
    return this.http.get<FormRI>('assets/config.json');
  }

  guardarRespuestas(formRI:FormRI):Observable<any>{
    return this.http.post<any>(this.BASE_URL + '/form/save-responses',formRI).pipe(retry(2));
  }

}
