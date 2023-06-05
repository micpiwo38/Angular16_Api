import { Component, Input, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
import { Produits } from '../produits';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitCategorieColorPipe } from '../produit-categorie-color.pipe';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../loader/loader.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-produits-edition',
    templateUrl: './produits-edition.component.html',
    styleUrls: ['./produits-edition.component.css'],
    standalone: true,
    imports: [
        NgIf,
        LoaderComponent,
        FormsModule,
        NgFor,
        ProduitCategorieColorPipe,
    ],
})
export class ProduitsEditionComponent implements OnInit {
  //Propriete d'entre = un produit concerné
  @Input() produit: Produits;

  //Tableau des categories
  categories: string[];
  is_add_form: boolean;

  constructor(
    private route_active: ActivatedRoute,
    private produits_service: ProduitsService,
    private router: Router
  ) {}

  ngOnInit() {
    //Liste des categories depuis la methode du service
    this.categories = this.produits_service.get_produits_categorie();
    //Nous somme dans le formulaire d'ajout si url contiens 
    this.is_add_form = this.router.url.includes("ajouter-produit");
  }

  //La categorie = check box
  category_type(categorie: string): boolean {
    //Est ce que le produit possède une catégorie = js includes params
    return this.produit!.categorie_produit.includes(categorie);
  }

  //Choix de la  categorie = quand on coche la case
  select_categorie($event: Event, categorie: string) {
    const is_checked = ($event.target as HTMLInputElement).checked;
    if (is_checked) {
      //categorie a ajouter au tableau de produit
      this.produit!.categorie_produit.push(categorie);
    } else {
      //index du tableau a retirer
      const index: any = this.produit!.categorie_produit.indexOf(categorie);
      this.produit!.categorie_produit.splice(index, 1);
    }
  }

  //Validation des catégorie
  is_categorie_valide(categorie: string): boolean {
    //2 cas erreurs
    //Une categorie est obligatoire et 2 max
    //Si on coche une categorie et que la case cochée est la case courante this.category_type(categorie)
    //Alors on bloque la check box
    if (
      this.produit!.categorie_produit.length == 1 &&
      this.category_type(categorie)
    ) {
      return false;
    }
    //Si plus de 2 case = on bloque la validation
    if (
      this.produit!.categorie_produit.length > 2 &&
      !this.category_type(categorie)
    ) {
      return false;
    }

    return true;
  }

  valider_edition() {
    //On distingue ajouter et editer qui utilise le meme composant formulaire
    //Si url contient = ajouter-produit = is_add_form = true et in est dans l'ajout
    if(this.is_add_form){
      //l'abbonement retourne un produit => le serveur va generer un nouvel id automatiquement nom present dans la classe de depart
      this.produits_service.ajouter_produit(this.produit).subscribe((produit: Produits) => {
        this.router.navigate(['/produits', produit.id]);
      })
    }else{
      //Sinon on edite
      //appel du produit services update produits
    this.produits_service.update_produit(this.produit).subscribe(() => {
      //redirection
      this.router.navigate(['/produits', this.produit.id]);
    });
    }
    
  }
}
