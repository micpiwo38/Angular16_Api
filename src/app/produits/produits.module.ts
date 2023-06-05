import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitCategorieColorPipe } from './produit-categorie-color.pipe';
import { BorderProduitsCardDirective } from './border-produits-card.directive';
import { ProduitsService } from './produits.service';
import { FormsModule } from '@angular/forms';
import { ProduitsEditionComponent } from './produits-edition/produits-edition.component';
import { ValidationEditionProduitComponent } from './validation-edition-produit/validation-edition-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { RechercherProduitsComponent } from './rechercher-produits/rechercher-produits.component';
import { LoaderComponent } from './loader/loader.component';



//Appel des composants + directives + pipes propre au module Produits
@NgModule({
    imports: [
        CommonModule,
        //Les formulaires
        FormsModule,
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
    providers: [ProduitsService]
})
export class ProduitsModule { }
