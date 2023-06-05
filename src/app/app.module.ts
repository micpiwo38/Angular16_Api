import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ErreurUrlComponent } from './erreur-url/erreur-url.component';
import { ProduitsModule } from './produits/produits.module';
import { FormsModule } from '@angular/forms';

import {InMemoryDataService} from './in-memory-data.service';
import { ConnexionComponent } from './connexion/connexion.component'
import { AuthGuard } from './auth.guard';


//lazy loading sous forme de module es6
const routes: Routes = [
    {path:"", redirectTo:"connexion", pathMatch:"full"},

    {path: "",canActivate: [AuthGuard], loadChildren: () => import("./produits/produits.routes").then(module => module.produits_routes)},

    {path: "connexion", 
      loadComponent: () => import("./connexion/connexion.component").then(module => module.ConnexionComponent)},
    {path: "accueil", component: AccueilComponent},
    //Si aucune route ne match => Composant 404 page not found
    {path: "**", 
      loadComponent: () => import("./erreur-url/erreur-url.component").then(module => module.ErreurUrlComponent)}
  ]
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        //Http
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        //Formulaire
        FormsModule,
        //Import du module Produits
        ProduitsModule,
        RouterModule.forRoot(routes),
        MenuComponent,
        AccueilComponent,
        ErreurUrlComponent,
        ConnexionComponent,
    ],
    //Injection de dependances
    providers: [],
    //Composant racine = parent 
    bootstrap: [AppComponent]
})
export class AppModule { }
