import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutenticationResponse } from '../models/autentication-response';
import {environment as env } from './../../environments/environment';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  apiEndPoint:string='';
  authorize:boolean = false;
  public channgeAuthorizeSubject = new Subject<boolean>();
  public changeAuth = this.channgeAuthorizeSubject.asObservable();
  constructor(private http: HttpClient) { 
  this.apiEndPoint= env.apiUrl;

  }

  authenticateApplication() {
     return this.http.get<AutenticationResponse>(this.apiEndPoint + '/security');
  }
  seeResources(){
    this.authorize = true;

    this.channgeAuthorizeSubject.next(true);

  }
}
