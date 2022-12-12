import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInStockComponent } from './product-in-stock.component';

describe('ProductInStockComponent', () => {
  let component: ProductInStockComponent;
  let fixture: ComponentFixture<ProductInStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductInStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
