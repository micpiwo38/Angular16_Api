import { Injectable } from '@angular/core';
import { Produits } from './produits';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, of } from 'rxjs';

@Injectable()
export class ProduitsService {

  //injection du module Http
  constructor(private http: HttpClient) { }

  //Cette methode de type interface Produits tableau retourne le tableau export class PRODUITS
  get_all_produits():Observable<Produits[]>{
    //Retourne un flux de données
    //Tap = console.log
    return this.http.get<Produits[]>("api/produits").pipe(
      tap((liste_produits) => this.produits_log(liste_produits)),
      catchError((erreur) => this.produits_erreur(erreur, []))
    );
  }
  //Retourne un objet du tableau par id ou rien si id ,'existe pas
  get_produit_by_id(produit_id: number): Observable<Produits|undefined>{
    return this.http.get<Produits>(`api/produits/${produit_id}`).pipe(
      tap((un_produit) => this.produits_log(un_produit)),
      catchError((erreur) => this.produits_erreur(erreur, undefined))
    );
  }

  //Refactor des logs
  private produits_log(response: Produits[]|Produits|undefined){
    console.table(response);
  }
  //refactor des erreurs
  private produits_erreur(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }
  

  get_produits_categorie(): string[]{
    return ["Meuble", "Salon", "Cuisine", "Hi-fi","Jeux Vidéo"];
  }
}
