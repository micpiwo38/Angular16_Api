import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{

  message: string = "Vous êtes déconnecté (michael - azerty)";
  nom_utilisateur: string;
  password: string;
  auth: AuthService

  constructor(private auth_service: AuthService, private router: Router){}

  ngOnInit(): void {
      this.auth = this.auth_service;
  }

  set_message(){
    if(this.auth.est_connecter){
      this.message = "Bienvenue ! Vous êtes conncetez !"
    }else{
      this.message = "Erreur de connexion ! Merci de vérifié votre nom d'utilisateur et-ou mot de passe !";
    }
  }

  connexion(){
    this.message = "Connexion en cours !";
    this.auth.connexion(this.nom_utilisateur, this.password)
    .subscribe((est_connecter:boolean) => {
      this.set_message();
      if(est_connecter){
        this.router.navigate(["/produits"]);
      }else{
        this.password = "";
        this.router.navigate(["/connexion"]);
      }
    })
  }

  deconnexion(){
      this.auth.deconnexion();
      this.message = "Vous êtes deconnectez !"
  }

}
