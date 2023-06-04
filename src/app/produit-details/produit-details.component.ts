import { Component, Input } from '@angular/core';
import { Produits } from '../produits';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent {

  @Input()
  produit!: Produits
}
