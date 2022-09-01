import { Component } from '@angular/core';
import { Market, ProductService } from "../../../services/product-service/product.service";

@Component({
  selector: 'app-all-product-panel',
  templateUrl: './all-product-panel.component.html',
  styleUrls: ['./all-product-panel.component.css']
})
export class AllProductPanelComponent {

  constructor(private productService: ProductService) {
     
    var market: Market = productService.GetMarketModel()!;
  }

}
