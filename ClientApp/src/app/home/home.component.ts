import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Market, MarketService, RepairParts} from "../market.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnChanges{
  market!: Market

  @Input() products!: RepairParts[];

  constructor(private marketService: MarketService){

  }

  ngOnInit(): void {
    this.marketService.GetMarketModel().subscribe(market =>{
      this.market = market
      if(this.market != null){
        this.products = this.market.marketRepairParts.products;
      }
    });
  }

  ngOnChanges(): void {
  }
}
