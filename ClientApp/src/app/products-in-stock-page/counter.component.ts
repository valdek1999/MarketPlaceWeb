import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Market, MarketService, ProductDeliver, ProductInStock} from "../market.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-products-in-stock-page-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges{
  market!: Market

  @Input() products!: ProductInStock[];
  currentPage = 1;
  currentPageSize = 3;
  currentProducts: ProductInStock[] = [];
  constructor(public marketService: MarketService){

  }

  ngOnInit(): void {
    this.marketService.GetMarketModel().subscribe(market =>{
      this.market = market
      if(this.market != null){
        this.products = this.market.marketProductInStock.products;
      }
      setTimeout(()=>this.updateCurrentProducts(), 1000);
    });
  }

  ngOnChanges(): void {
  }

  updatePage(page: PageEvent){
    this.currentPage =  page.pageIndex + 1
    this.currentPageSize = page.pageSize
    if(typeof this.products != undefined){
      this.updateCurrentProducts()
    }
  }

  updateCurrentProducts(){
    var start = (this.currentPage-1)*this.currentPageSize
    var end = start + this.currentPageSize
    if(end > this.products.length){
      end = this.products.length
    }
    this.currentProducts = this.products.slice(start, end)
    this.scrollOnTop()
  }

  scrollOnTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }



}

export interface ModalDeliver{
  productDeliver: ProductDeliver
}
