import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherProduitsComponent } from './rechercher-produits.component';

describe('RechercherProduitsComponent', () => {
  let component: RechercherProduitsComponent;
  let fixture: ComponentFixture<RechercherProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RechercherProduitsComponent]
});
    fixture = TestBed.createComponent(RechercherProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
