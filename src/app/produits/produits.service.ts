import { Injectable } from '@angular/core';
import { Produits } from './produits';
import { PRODUITS } from './mock-produits';

@Injectable()
export class ProduitsService {

  constructor() { }
  //Cette methode de type interface Produits tableau retourne le tableau export class PRODUITS
  get_all_produits():Produits[]{
    return PRODUITS;
  }
  //Retourne un objet du tableau par id ou rien si id ,'existe pas
  get_produit_by_id(produit_id: number): Produits | undefined{
    return PRODUITS.find(produit => produit.id == produit_id);
  }

  get_produits_categorie(): string[]{
    return ["Meuble", "Salon", "Cuisine", "Hi-fi","Jeux Vidéo"];
  }
}
