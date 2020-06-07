import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormRI } from '../models/form-ri';

@Injectable({
  providedIn: 'root'
})
export class FormIRServiceService {

  constructor(private http: HttpClient) { }
  getFormIR(): Observable<FormRI> {
    return this.http.get<FormRI>('assets/config.json');
  }

}
