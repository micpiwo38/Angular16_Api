import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erreur-url',
  templateUrl: './erreur-url.component.html',
  styleUrls: ['./erreur-url.component.css']
})
export class ErreurUrlComponent {

  constructor(private router: Router){}

  back_to_home(){
    this.router.navigate(["/accueil"])
  }
}
