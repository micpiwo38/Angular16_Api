import { Component, Input, OnInit } from '@angular/core';
import { Produits } from '../produits';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUITS } from '../mock-produits';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit{

  produit_liste: Produits[] = [];
  produit!: Produits | undefined
  //Injection de dependance = Module de routing Angular
  constructor(private route_active: ActivatedRoute, private router: Router){}
  message: string = "";

  ngOnInit(): void {
      this.produit_liste = PRODUITS;
      const route_param_ID: string|null = this.route_active.snapshot.paramMap.get("id_produit");
      if(route_param_ID){
        this.produit = this.produit_liste.find(produit => produit.id == +route_param_ID)
      }
  }

  back_to_produit(){
    this.router.navigate(["/produits"])
  }
}
