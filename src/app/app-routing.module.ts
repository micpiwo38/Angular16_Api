import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {path:"", redirectTo:"accueil", pathMatch:"full"},
  {path: "accueil", component: AccueilComponent},
  {path: "produits", component: ProduitsComponent} 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
