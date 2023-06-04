import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreurUrlComponent } from './erreur-url.component';

describe('ErreurUrlComponent', () => {
  let component: ErreurUrlComponent;
  let fixture: ComponentFixture<ErreurUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErreurUrlComponent]
    });
    fixture = TestBed.createComponent(ErreurUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
