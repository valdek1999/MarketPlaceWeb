import {Component, Input, OnInit} from '@angular/core';
import {ProductDeliver} from "../market.service";

@Component({
  selector: 'app-product-deliver',
  templateUrl: './product-deliver.component.html',
  styleUrls: ['./product-deliver.component.css']
})
export class ProductDeliverComponent implements OnInit {
  @Input() productDeliver!: ProductDeliver;
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
