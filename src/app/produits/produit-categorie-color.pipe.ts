import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'produitCategorieColor'
})
export class ProduitCategorieColorPipe implements PipeTransform {

  //Propriete du pipe : dans html on appel | produitCategorieColor
  transform(categorie: string): string {
    let color: string;
    switch(categorie){
      case "Meuble":
        color = "bg-success p-3 rounded m-3";
        break;
      case "Hi-fi":
        color = "bg-info p-3 rounded m-3";
        break;
        break;
      case "Jardin":
        color = "bg-warning p-3 rounded m-3";
        break;
      case "Electro-menager":
        color = "bg-primary p-3 rounded m-3";
        break;
      default:
        color = "bg-secondary p-3 rounded -m-3";
        break;
    }
    return "badge " + color;
  }

}
