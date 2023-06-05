import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ErreurUrlComponent } from './erreur-url/erreur-url.component';
import { ProduitsModule } from './produits/produits.module';
import { FormsModule } from '@angular/forms';

import {InMemoryDataService} from './in-memory-data.service';
import { ConnexionComponent } from './connexion/connexion.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ErreurUrlComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    //Http
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
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
