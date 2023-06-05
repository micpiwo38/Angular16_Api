import { Component, Input, OnInit } from '@angular/core';
import { Produits } from '../produits';
import { ProduitsEditionComponent } from '../produits-edition/produits-edition.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-ajouter-produit',
    templateUrl: './ajouter-produit.component.html',
    styleUrls: ['./ajouter-produit.component.css'],
    standalone: true,
    imports: [NgIf, ProduitsEditionComponent]
})
export class AjouterProduitComponent implements OnInit{

  produit_enfant: Produits;

  ngOnInit(): void {
      this.produit_enfant = new Produits();
  }


}
