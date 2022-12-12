import {Component, Input, OnInit} from '@angular/core';
import {ProductInStock} from "../market.service";

@Component({
  selector: 'app-product-in-stock',
  templateUrl: './product-in-stock.component.html',
  styleUrls: ['./product-in-stock.component.css']
})
export class ProductInStockComponent implements OnInit {
  @Input() productInStock!: ProductInStock;

  constructor() { }

  ngOnInit(): void {
  }

  GetNormalString(value:string){
    if(value.length < 22){
      return value + ' '.repeat(22-value.length)
    }
    return value
  }

}
