import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appBorderProduitsCard]',
    standalone: true
})
export class BorderProduitsCardDirective {

  initial_color: string = "#f5f5f5"
  default_color: string = "#f5f5f5";
  change_color: string = "#009688";
  //Recup de l'element du DOM = carte produit
  constructor(private element: ElementRef ) {
    //Appel des methodes lors de l'init cu composant
    this.setHeight(100);
    this.setBoder(this.default_color)
  }

  //Operateur d'entree + creation d'un alias (ici borderColor )
  @Input("border-produits-card") borderColor: string = "";

  //HostListener permet de trigger un event = addEventListener
  @HostListener("mouseenter") onMouseEnter(){
    this.setBoder(this.borderColor || this.change_color);
  }

  //La souris sort de la carte
  @HostListener("mouseleave") onMouseLeave(){
    this.setBoder(this.initial_color);
  }



  //Hauteur de la carte
  private setHeight(hauteur: number){
    this.element.nativeElement.style.height= `${hauteur}%`;
  }
  //Bordure au survol
  private setBoder(color: string){
    this.element.nativeElement.style.border = `solid 4px ${color}`;
  }


}
