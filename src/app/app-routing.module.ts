import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { ErreurUrlComponent } from './erreur-url/erreur-url.component';

const routes: Routes = [
  {path: "accueil", component: AccueilComponent},
  {path: "produits", component: ProduitsComponent}, 
  {path: "produits/:id_produit", component: ProduitDetailsComponent},
  {path:"", redirectTo:"accueil", pathMatch:"full"},
  //Si aucune route ne match => Composant 404 page not found
  {path: "**", component: ErreurUrlComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
