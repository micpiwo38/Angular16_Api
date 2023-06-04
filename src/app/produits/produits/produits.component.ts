import { Component, OnInit } from '@angular/core';

import { Produits } from '../produits';
import { Router } from '@angular/router';
import { ProduitsService } from '../produits.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{

  //produits: Produits[] = PRODUITS
  produits: Produits[] | undefined;
  //Pas d'instance du service (const service = new ProduitsService) mais un injection dans les paramètre du constructeur
  //Donc une seule instance (singleton) comme une boite noir
  //Le service donne acces au methode get get by id et categorie
  constructor(private produits_service: ProduitsService, private router: Router){}

  ngOnInit(): void {
    //Cette methode get_all_produits();  retourne PRODUITS
    this.produits = this.produits_service.get_all_produits();  
  }

  details_produit(produit: Produits){
      alert(`Nom du produit : ${produit.nom_produit}`)
  }

  afficher_details_produit(produit: Produits){
    this.router.navigate(["/produits", produit.id]);
  }


}
