import { Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";


//Les routes qui ne concerne que le module Produits
export const produits_routes: Routes = [
    {path: "ajouter-produit", 
        loadComponent: () => import("./ajouter-produit/ajouter-produit.component").then(module => module.AjouterProduitComponent)},
    {path: "produit-edition/:id_produit", 
        loadComponent: () => import("./produits-edition/produits-edition.component").then(module => module.ProduitsEditionComponent)},
    {path: "produits", 
        loadComponent: () => import("./produits/produits.component").then(module => module.ProduitsComponent)}, 
    {path: "produits/:id_produit", 
        loadComponent: () => import("./produit-details/produit-details.component").then(module => module.ProduitDetailsComponent)},
  ]