import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutenticationResponse } from '../models/autentication-response';
import {environment as env } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  apiEndPoint:string=''
  constructor(private http: HttpClient) { 
  this.apiEndPoint= env.apiUrl;

  }

  authenticateApplication() {
     return this.http.get<AutenticationResponse>(this.apiEndPoint + env.auth.token);
  }
}
