import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ErreurUrlComponent } from './erreur-url/erreur-url.component';
import { ProduitsModule } from './produits/produits.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ErreurUrlComponent
  ],
  imports: [
    BrowserModule,
    //Formulaire
    FormsModule,
    //Import du module Produits
    ProduitsModule,
    //Lire les modules avant le routing pour eviter qu'il charge la 404 par defaut
    AppRoutingModule,
  ],
  //Injection de dependances
  providers: [],
  //Composant racine = parent 
  bootstrap: [AppComponent]
})
export class AppModule { }
