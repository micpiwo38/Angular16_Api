import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ErreurUrlComponent } from './erreur-url/erreur-url.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {path:"", redirectTo:"connexion", pathMatch:"full"},
  {path: "connexion", component: ConnexionComponent},
  {path: "accueil", component: AccueilComponent},
  //Si aucune route ne match => Composant 404 page not found
  {path: "**", component: ErreurUrlComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
