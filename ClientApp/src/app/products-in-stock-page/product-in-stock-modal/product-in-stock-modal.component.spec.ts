import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInStockModalComponent } from './product-in-stock-modal.component';

describe('ProductInStockModalComponent', () => {
  let component: ProductInStockModalComponent;
  let fixture: ComponentFixture<ProductInStockModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInStockModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductInStockModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
