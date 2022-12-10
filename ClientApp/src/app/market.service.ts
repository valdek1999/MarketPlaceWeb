import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:string) {
  }

  GetMarketModel(){
      return this.http.get<Market>('https://localhost:7000/' + 'products')
  }
}

export interface Market {
  "name":string,
  "description":string,
  "usdRate":string,
  "googleUsdRate":string,
  "miningProfitability":string,
  "electricityСost":string
  "marketProductDeliver": MarketProductDeliver
  "marketProductInStock": MarketProductInStock
  "marketRepairParts": MarketRepairParts
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
  "id":number,
  "name":string,
  "products":RepairParts[],
  "additionalInformation":string
}

export interface Product {
  "id":number,
  "name":string,
  "description":string
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
  "count":string,
  "state":string,
  "priceRub":string,
  "location":string,
}
