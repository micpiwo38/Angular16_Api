import { Component, Input, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
import { Produits } from '../produits';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produits-edition',
  templateUrl: './produits-edition.component.html',
  styleUrls: ['./produits-edition.component.css']
})
export class ProduitsEditionComponent implements OnInit{

  //Propriete d'entre = un produit concerné
  @Input()  produit: Produits | undefined

  //Tableau des categories
  categories: string[];

  constructor(
    private route_active: ActivatedRoute,
    private produits_service: ProduitsService,
    private router: Router
    ){}

  ngOnInit(){
      //recup de id dans URL
      const route_param_produitID: string|null = this.route_active.snapshot.paramMap.get("id_produit");
      if(route_param_produitID){
        //Appel de la methode by id du service + = string to int
        this.produit = this.produits_service.get_produit_by_id(+route_param_produitID);
      }
      //Liste des categories depuis la methode du service
      this.categories = this.produits_service.get_produits_categorie();
      console.log(this.categories)
      console.log(this.produit)
  }

    //La categorie = check box
    category_type(categorie: string): boolean{
      //Est ce que le produit possède une catégorie = js includes params
      return this.produit!.categorie_produit.includes(categorie)
    }
  
    //Choix de la  categorie = quand on coche la case
    select_categorie($event: Event, categorie: string){
      const is_checked = ($event.target as HTMLInputElement).checked;
      if(is_checked){
        //categorie a ajouter au tableau de produit
        this.produit!.categorie_produit.push(categorie);
      }else{
        //index du tableau a retirer
        const index: any = this.produit!.categorie_produit.indexOf(categorie);
        this.produit!.categorie_produit.splice(index,1);
      } 
    }
  
    //Validation des catégorie
    is_categorie_valide(categorie: string):boolean{
      //2 cas erreurs
      //Une categorie est obligatoire et 2 max
      //Si on coche une categorie et que la case cochée est la case courante this.category_type(categorie)
      //Alors on bloque la check box
      if(this.produit!.categorie_produit.length == 1 && this.category_type(categorie)){
        return false;
      }
       //Si plus de 2 case = on bloque la validation
      if(this.produit!.categorie_produit.length > 10 && !this.category_type(categorie)){
        return false;
      }
  
      return true;
    }
  
    valider_edition(){
      console.log("Formulaire valider");
      //redirection
      this.router.navigate(["/produits", this.produit!.id])
    }


}
