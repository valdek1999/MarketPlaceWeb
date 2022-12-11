import {Component, EventEmitter, Input, OnChanges, OnInit} from '@angular/core';
import {Market, MarketService, RepairParts} from "../market.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnChanges{
  market!: Market

  @Input() products!: RepairParts[];
  currentPage = 1;
  currentPageSize = 10;
  currentProducts: RepairParts[] = [];
  constructor(private marketService: MarketService){

  }

  ngOnInit(): void {
    this.marketService.GetMarketModel().subscribe(market =>{
      this.market = market
      if(this.market != null){
        this.products = this.market.marketRepairParts.products;
      }
      this.updateCurrentProducts();
    });
  }

  ngOnChanges(): void {
  }

  updatePage(page: PageEvent){
    this.currentPage =  page.pageIndex
    this.currentPageSize = page.pageSize
    if(typeof this.products != undefined){
      this.updateCurrentProducts()
    }
  }

  updateCurrentProducts():void{
    var start = (this.currentPage-1)*this.currentPageSize
    var end = start + this.currentPageSize
    if(end > this.products.length){
      end = this.products.length
    }
    this.currentProducts = this.products.slice(start, end)
  }
}
