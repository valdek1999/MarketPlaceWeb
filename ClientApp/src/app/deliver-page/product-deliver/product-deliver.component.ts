import {Component, ContentChild, Injectable, Input, OnInit} from '@angular/core';
import {ProductDeliver} from "../../market.service";
import {DeliverModalComponent} from "../deliver-modal/deliver-modal.component";
import {Dialog} from '@angular/cdk/dialog';

@Component({
  selector: 'app-product-deliver',
  templateUrl: './product-deliver.component.html',
  styleUrls: ['./product-deliver.component.css']
})
export class ProductDeliverComponent implements OnInit {
  @Input() productDeliver!: ProductDeliver;
  @ContentChild('image', {static: true}) p!: HTMLDivElement;

  constructor(public dialog:Dialog) { }
  public link = ['https://cdn.dribbble.com/users/900374/screenshots/5315324/gpu_mining_2_1x.gif',
    'https://c1.neweggimages.com/ProductImage/14-137-054-07.jpg',
    'https://cdn.videocardz.net/cache/bba956a4022a39b42c7c01e4f95f72a6-1200x900.jpg',
    'https://digitik.ru/upload/iblock/eb5/eb5723f94e719fe88b96b8f09c51cf7e.png',
    'https://cdn1.ozone.ru/multimedia/1015387830.jpg'
  ][Math.floor(Math.random() * 5)]
  ngOnInit(): void {
    //this.p.style.backgroundImage = (this.link);
  }

  GetNormalString(value:string){
    if(value.length < 22){
      return value + ' '.repeat(22-value.length)
    }
    return value
  }
  openDialog(){
    this.dialog.open(DeliverModalComponent, {
      minWidth: '600px',
      data: {
        productDeliver : this.productDeliver
      }
    })
  }

}
