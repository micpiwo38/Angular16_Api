import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderProduitsCard]'
})
export class BorderProduitsCardDirective {

  //Recup de l'element du DOM = carte produit
  constructor(private element: ElementRef ) {
    //Appel des methodes lors de l'init cu composant
    this.setHeight(100);
  }

  //Operateur d'entree
  @Input("border-produits-card") borderColor: string = "";

  //HostListener permet de trigger un event = addEventListener
  @HostListener("mouseenter") onMouseEnter(){
    this.setBoder(this.borderColor || "#009688");
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.setBoder("#f5f5f5");
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
