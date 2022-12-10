import {Component, OnChanges, OnInit} from '@angular/core';
import {Market, MarketService, RepairParts} from "../market.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnChanges{
  market!: Market

  products!: RepairParts[];

  constructor(private marketService: MarketService){

  }

  ngOnInit(): void {
    this.market = this.marketService.GetMarketModel()!;
    this.products = this.market.MarketRepairParts.Products;
  }

  ngOnChanges(): void {
  }
}
