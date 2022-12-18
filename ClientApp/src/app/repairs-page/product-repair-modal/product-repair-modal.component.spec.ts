import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRepairModalComponent } from './product-repair-modal.component';

describe('ProductRepairModalComponent', () => {
  let component: ProductRepairModalComponent;
  let fixture: ComponentFixture<ProductRepairModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRepairModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRepairModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
