import { Injectable } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { AutenticationResponse } from '../models/autentication-response';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private authService: AuthorizationService) { }

  async loadToken() {
    await this.authenticateAplication();
  }

  async authenticateAplication() {
    return new Promise((resolve, reject) => {
      this.authService.authenticateApplication().subscribe(
        (res: AutenticationResponse) => {
          sessionStorage.setItem('token', res.token);
          resolve();
        },(response: any) => {
          reject(`failed to authenticate': ${JSON.stringify(response)}`);
        });
    });
  }

  public getToken(): string {
    return sessionStorage.getItem('token');
  }
}
