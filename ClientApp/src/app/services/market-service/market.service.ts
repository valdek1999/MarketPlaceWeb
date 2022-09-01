import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  public market: Market | undefined;
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:string) {
  }

  GetMarketModel(){
    this.http.get<Market>('https://localhost:7000/' + 'products').subscribe(market => {
        console.log(market);
        this.market = market;
      },
      error => {
        console.error(error);
      });
    return this.market;
  }
}

export interface Market {
  "Name":string,
  "Description":string,
  "UsdRate":string,
  "GoogleUsdRate":string,
  "MiningProfitability":string,
  "ElectricityСost":string
  "MarketProductDeliver": MarketProductDeliver
  "MarketProductInStock": MarketProductInStock
  "MarketRepairParts": MarketRepairParts
}

export interface MarketProductDeliver{
  "Id":number,
  "Name":string,
  "Products":ProductDeliver[],
  "AdditionalInformation":string
}
export interface MarketProductInStock{
  "Id":number,
  "Name":string,
  "Products":ProductInStock[],
  "AdditionalInformation":string
}
export interface MarketRepairParts{
  "Id":number,
  "Name":string,
  "Products":RepairParts[],
  "AdditionalInformation":string
}

export interface Product {
  "Id":number,
  "Name":string,
  "Description":string
}
export interface ProductDeliver extends Product{
  "HashRate":string,
  "State":string,
  "PriceRub":string,
  "PriceUsd":string,
  "PriceTh":string,
  "PriceRelevance":string
}

export interface ProductInStock extends Product{
  "HashRate":string,
  "State":string,
  "Count":string,
  "PriceRub":string,
  "Location":string,
  "Power":string,
  "ElectricityСosts":string,
  "Profitability":string,
  "Earnings":string,
  "PaybackPeriod":string,
}
export interface RepairParts extends Product{
  "Count":string,
  "State":string,
  "PriceRub":string,
  "Location":string,
}
