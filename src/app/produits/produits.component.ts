import { Component, OnInit } from '@angular/core';

import { PRODUITS } from "../mock-produits"
import { Produits } from '../produits';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{

  produits: Produits[] = PRODUITS
  un_produit: Produits | undefined;
  
  constructor(private router: Router){}

  ngOnInit(): void {
    console.table(PRODUITS)
      
  }

  details_produit(produit: Produits){
      alert(`Nom du produit : ${produit.nom_produit}`)
  }

  //Choisir un produit avec input number
  choix_produit(produit_id: string){
    //Ici le + convertit .value: string en number
    const id = +produit_id;
    const recherche_produit: Produits | undefined = this.produits.find(produit => produit.id == id);
    if(recherche_produit){
      console.log(`Vous avez selectionnez : ${recherche_produit?.nom_produit}`)
      this.un_produit = recherche_produit;
    }else{
      this.un_produit = recherche_produit;
    }
  }

  afficher_details_produit(produit: Produits){
    this.router.navigate(["/produits", produit.id]);
  }


}
