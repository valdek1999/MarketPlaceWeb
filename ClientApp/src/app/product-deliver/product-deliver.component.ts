import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ProductDeliver} from "../market.service";
import {DeliverModalComponent} from "../counter/deliver-modal/deliver-modal.component";
import {Dialog} from '@angular/cdk/dialog';
@Component({
  selector: 'app-product-deliver',
  templateUrl: './product-deliver.component.html',
  styleUrls: ['./product-deliver.component.css']
})
export class ProductDeliverComponent implements OnInit {
  @Input() productDeliver!: ProductDeliver;
  constructor(public dialog:Dialog) { }

  ngOnInit(): void {
  }

  GetNormalString(value:string){
    if(value.length < 22){
      return value + ' '.repeat(22-value.length)
    }
    return value
  }
  openDialog(){
    this.dialog.open(DeliverModalComponent, {
      minWidth: '300px',
      data: {
        productDeliver : this.productDeliver
      }
    })
  }

}
