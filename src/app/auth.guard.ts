import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  
  constructor(
    private auth_service: AuthService,
    private router: Router
  ){}

  canActivate():boolean{
      console.log("Guard = OK");
      if(this.auth_service.est_connecter){
        return true;
      }
      this.router.navigate(["/connexion"])
      return false;
  }
};
