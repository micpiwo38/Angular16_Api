import { Component, OnInit } from '@angular/core';
import { Produits } from '../produits';
import { ActivatedRoute } from '@angular/router';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-validation-edition-produit',
  templateUrl: './validation-edition-produit.component.html',
  styleUrls: ['./validation-edition-produit.component.css'],
})
export class ValidationEditionProduitComponent implements OnInit {
  produit_enfant: Produits | undefined;

  constructor(
    private route_active: ActivatedRoute,
    private produits_service: ProduitsService
  ) {}

  ngOnInit(): void {
    //recup de id dans URL
    const route_param_produitID: string | null =
      this.route_active.snapshot.paramMap.get('id_produit');
    if (route_param_produitID) {
      //Appel de la methode by id du service + = string to int
      this.produit_enfant = this.produits_service.get_produit_by_id(
        +route_param_produitID
      );
    }else{
      this.produit_enfant = undefined;
    }
  }
}
