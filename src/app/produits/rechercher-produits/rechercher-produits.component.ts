import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produits } from '../produits';
import { Observable, Subject, debounce, debounceTime, distinctUntilChanged, distinctUntilKeyChanged, switchMap } from 'rxjs';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-rechercher-produits',
  templateUrl: './rechercher-produits.component.html',
  styleUrls: ['./rechercher-produits.component.css']
})
export class RechercherProduitsComponent implements OnInit{

  //classe Subject de RxJs = stock des mots tapés dans un tableau de string
  //Creer un flux de données dans le temps
  //Liste de demande = produits$
  terme_recherche = new Subject<string>();
  //Observeble ne peu que etre consomé
  //tableau_produit(terme_recherche) = vide par defaut
  //Ce denier sera rempli et affichera les reponse qui match avec la recherche

  //$ est une convention cela indique que c'est un type Observable

  produits$: Observable<Produits[]>;

  //$produit$ async est un racourci de syntaxe = this.produits$.subscribe(this.produits = produits)

  constructor(private router: Router, private produits_service: ProduitsService){}

  ngOnInit(): void {
    //Attention : on ne lance pas une requète par lettre tappée
      this.produits$ = this.terme_recherche.pipe(
        //RxJs donne acces a debounceTime + delay en miliseconde
        debounceTime(300),
        //Supprime les recherches similaire dans le flux = attend que la recherche change
        distinctUntilChanged(),
        //switchMap retourne la liste des produits = coversion du service type Observable en tableau de string
        switchMap((nom_produit) => this.produits_service.rechercher_produits(nom_produit))
      )
      console.log(this.produits$)
  }

  rechercher(nom: string){
    //A chaque recherche entré on pousse le terme dans le tableau de string Subject = creation du flux
    this.terme_recherche.next(nom);
  }

  //recirection
  go_to_details_produit(produit: Produits){
    this.router.navigate(["/produits", produit.id])
  }
}
