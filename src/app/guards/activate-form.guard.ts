import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateFormGuard implements CanActivate {
  constructor (private authorizationService:AuthorizationService,
    private roter:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authorizationService.authorize){
        console.log(this.authorizationService.authorize);
        return true;
      }
      this.roter.navigate(['']);
      return false;
  }
  
}
