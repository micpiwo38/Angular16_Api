import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationEditionProduitComponent } from './validation-edition-produit.component';

describe('ValidationEditionProduitComponent', () => {
  let component: ValidationEditionProduitComponent;
  let fixture: ComponentFixture<ValidationEditionProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationEditionProduitComponent]
    });
    fixture = TestBed.createComponent(ValidationEditionProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
