import { Injectable } from '@angular/core';
import { Produits } from './produits';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  //Ajouter un produit
  ajouter_produit(produits: Produits): Observable<Produits>{
    //Option du headers
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Produits>("api/produits", produits, httpOptions).pipe(
      tap((res) => this.produits_log(res)),
      catchError((erreur) => this.produits_erreur(erreur, null))
    )
  }

  //mise a jour d'un produit
  update_produit(produit: Produits): Observable<null>{
    //Option du headers
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    //Methode put
    return this.http.put("api/produits", produit, httpOptions).pipe(
      tap((res) => this.produits_log(res)),
      catchError((erreur) => this.produits_erreur(erreur, null))
    )
  }

  //Supprimer un produits
  supprimer_produit_by_id(produit_id: number): Observable<Produits|undefined>{
    return this.http.delete(`api/produits/${produit_id}`).pipe(
      tap((un_produit) => this.produits_log(un_produit)),
      catchError((erreur) => this.produits_erreur(erreur, undefined))
    );
  }

  //Recherche par nom
  rechercher_produits(nom_produit: string):Observable<Produits[]>{

    //Si on tape - de 2 lettre
    //Aucun resultat
    /*if(nom.length <= 1){
      return of([]);
    }*/

    return this.http.get<Produits[]>(`api/produits/?nom=${nom_produit}`).pipe(
      tap((res) => this.produits_log(res)),
      catchError((erreur) => this.produits_erreur(erreur, []))
    )
  }

  //Refactor des logs
  private produits_log(response: any){
    console.table(response);
  }
  //refactor des erreurs
  private produits_erreur(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }
  

  get_produits_categorie(): string[]{
    return ["Meuble", "Salon", "Cuisine", "Hi-fi","Jeux Vidéo", "Divers"];
  }
}
