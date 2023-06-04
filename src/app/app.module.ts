import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { BorderProduitsCardDirective } from './border-produits-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ProduitsComponent,
    BorderProduitsCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //Injection de dependances
  providers: [],
  //Composant racine = parent 
  bootstrap: [AppComponent]
})
export class AppModule { }
