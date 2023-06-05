import { Component, OnInit } from '@angular/core';

import { Produits } from '../produits';
import { Router } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { ProduitCategorieColorPipe } from '../produit-categorie-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { BorderProduitsCardDirective } from '../border-produits-card.directive';
import { RechercherProduitsComponent } from '../rechercher-produits/rechercher-produits.component';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';


@Component({
    selector: 'app-produits',
    templateUrl: './produits.component.html',
    styleUrls: ['./produits.component.css'],
    standalone: true,
    imports: [NgIf, RechercherProduitsComponent, NgFor, BorderProduitsCardDirective, LoaderComponent, UpperCasePipe, DatePipe, ProduitCategorieColorPipe]
})
export class ProduitsComponent implements OnInit{

  //produits: Produits[] = PRODUITS
  produits: Produits[] | undefined;
  //Pas d'instance du service (const service = new ProduitsService) mais un injection dans les paramètre du constructeur
  //Donc une seule instance (singleton) comme une boite noir
  //Le service donne acces au methode get get by id et categorie
  constructor(private produits_service: ProduitsService, private router: Router){}

  ngOnInit(): void {
    //Cette methode get_all_produits();  retourne PRODUITS API + abonnement
    //Recup de observable des services + abonnement recup la liste de l'api et la stock dans le tableau produits[]
    this.produits_service.get_all_produits()
      .subscribe(produits => this.produits = produits);
  }

  details_produit(produit: Produits){
      alert(`Nom du produit : ${produit.nom_produit}`)
  }

  afficher_details_produit(produit: Produits){
    this.router.navigate(["/produits", produit.id]);
  }


}
