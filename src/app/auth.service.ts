import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  est_connecter:boolean = false;
  redirection: string;

  constructor(private router: Router) { }

  connexion(nom_utilisateur: string, password: string): Observable<boolean>{
    //Async
    const est_connecter = (nom_utilisateur == "michael" && password == "azerty");

    return of(est_connecter).pipe(
      delay(1000),
      tap(est_connecter => this.est_connecter = est_connecter)
    )
  }

  deconnexion(){
    this.est_connecter = false;
  }
}
