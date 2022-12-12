import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";

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
  "id":number,
  "name":string,
  "products":ProductDeliver[],
  "additionalInformation":string
}
export interface MarketProductInStock{
  "id":number,
  "name":string,
  "products":ProductInStock[],
  "additionalInformation":string
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
  "hashRate":string,
  "state":string,
  "priceRub":string,
  "priceUsd":string,
  "priceTh":string,
  "priceRelevance":string
}

export interface ProductInStock extends Product{
  "hashRate":string,
  "state":string,
  "count":string,
  "priceRub":string,
  "location":string,
  "power":string,
  "electricityСosts":string,
  "profitability":string,
  "earnings":string,
  "paybackPeriod":string,
}
export interface RepairParts extends Product{
  "count":string,
  "state":string,
  "priceRub":string,
  "location":string,
}
