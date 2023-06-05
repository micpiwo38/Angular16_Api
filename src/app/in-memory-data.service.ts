import { Injectable } from '@angular/core';

import {InMemoryDbService} from 'angular-in-memory-web-api';
import { PRODUITS } from './produits/mock-produits';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  //Transforme la classe PRODUITS en API
  createDb(){
    const produits = PRODUITS;
    return {produits}
  }


}
