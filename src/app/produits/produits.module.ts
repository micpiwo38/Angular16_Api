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
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { RechercherProduitsComponent } from './rechercher-produits/rechercher-produits.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';


//Les routes qui ne concerne que le module Produits
const produits_routes: Routes = [
  {path: "ajouter-produit", component: AjouterProduitComponent, canActivate:[AuthGuard]},
  {path: "produit-edition/:id_produit", component: ValidationEditionProduitComponent, canActivate: [AuthGuard]},
  {path: "produits", component: ProduitsComponent, canActivate:[AuthGuard]}, 
  {path: "produits/:id_produit", component: ProduitDetailsComponent,canActivate:[AuthGuard]},
]

//Appel des composants + directives + pipes propre au module Produits
@NgModule({
  declarations: [
    ProduitDetailsComponent,
    ProduitsComponent,
    ProduitCategorieColorPipe,
    BorderProduitsCardDirective,
    ProduitsEditionComponent,
    ValidationEditionProduitComponent,
    AjouterProduitComponent,
    RechercherProduitsComponent,
    LoaderComponent
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
