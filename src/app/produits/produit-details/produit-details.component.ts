import { Component, Input, OnInit } from '@angular/core';
import { Produits } from '../produits';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitsService } from '../produits.service';


@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit{

  produit_liste: Produits[] = [];
  produit!: Produits | undefined
  //Injection de dependance = Module de routing Angular
  constructor(
    private route_active: ActivatedRoute, 
    private router: Router,
    private produits_service: ProduitsService
    
    ){}
  

  ngOnInit(): void {
      //recup de id dans URL
      const route_param_produitID: string|null = this.route_active.snapshot.paramMap.get("id_produit");
      if(route_param_produitID){
        //Appel de la methode by id du service + = string to int
        this.produit = this.produits_service.get_produit_by_id(+route_param_produitID);
      }
  }

  back_to_produit(){
    this.router.navigate(["/produits"])
  }

  editer_produit(produit: Produits){
    console.log("ok click")
    this.router.navigate(["/produit-edition", produit.id]);
  }
}
