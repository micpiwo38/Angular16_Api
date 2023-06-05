import { Component, Input, OnInit } from '@angular/core';
import { Produits } from '../produits';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit{

  produit_enfant: Produits;

  ngOnInit(): void {
      this.produit_enfant = new Produits();
  }


}
