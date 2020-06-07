import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutenticationResponse } from '../models/autentication-response';
import {environment as env} from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  authenticateApplication() {
     return this.http.get<AutenticationResponse>(env.apiURL + env.auth.token)
  }
}
