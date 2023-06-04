import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsEditionComponent } from './produits-edition.component';

describe('ProduitsEditionComponent', () => {
  let component: ProduitsEditionComponent;
  let fixture: ComponentFixture<ProduitsEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitsEditionComponent]
    });
    fixture = TestBed.createComponent(ProduitsEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
