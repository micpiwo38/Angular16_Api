import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitCategorieColorPipe } from './produit-categorie-color.pipe';
import { BorderProduitsCardDirective } from './border-produits-card.directive';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsService } from './produits.service';
import { FormsModule } from '@angular/forms';
import { ProduitsEditionComponent } from './produits-edition/produits-edition.component';
import { ValidationEditionProduitComponent } from './validation-edition-produit/validation-edition-produit.component';

//Les routes qui ne concerne que le module Produits
const produits_routes: Routes = [
  {path: "produits", component: ProduitsComponent}, 
  {path: "produits/:id_produit", component: ProduitDetailsComponent},
  {path: "produit-edition/:id_produit", component: ValidationEditionProduitComponent}
]

//Appel des composants + directives + pipes propre au module Produits
@NgModule({
  declarations: [
    ProduitDetailsComponent,
    ProduitsComponent,
    ProduitCategorieColorPipe,
    BorderProduitsCardDirective,
    ProduitsEditionComponent,
    ValidationEditionProduitComponent
  ],
  imports: [
    CommonModule,
    //Les formulaires
    FormsModule,
    //Import des routes enfant du module Produits
    RouterModule.forChild(produits_routes)
  ],
  providers:[ProduitsService]
})
export class ProduitsModule { }
