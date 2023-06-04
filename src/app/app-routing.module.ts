import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';

const routes: Routes = [
  {path:"", redirectTo:"accueil", pathMatch:"full"},
  {path: "accueil", component: AccueilComponent},
  {path: "produits", component: ProduitsComponent}, 
  {path: "produits/:id_produit", component: ProduitDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
