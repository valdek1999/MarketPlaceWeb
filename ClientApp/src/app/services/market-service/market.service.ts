import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})

export class MarketService {

	public market: Market | undefined;
	constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

	GetMarketModel() {
		this.http.get<Market>('https://localhost:7000/' + 'products').subscribe(market => {
			console.log(market);
			this.market = market;
		},
			error => {
				console.error(error);
			});
		return this.market;
	}

	GetMarketTestModel() {
		var deliver: MarketProductDeliver = {
			Id: 1,
			Name: "Главный доставщик",
			Products: [
				{
					HashRate: "999",
					State: "Везет",
					PriceRub: "200",
					PriceUsd: "20",
					PriceTh: "10",
					PriceRelevance: "66"
				},
				{
					HashRate: "888",
					State: "Везет",
					PriceRub: "300",
					PriceUsd: "30",
					PriceTh: "20",
					PriceRelevance: "77"
				},
				{
					HashRate: "777",
					State: "Везет",
					PriceRub: "400",
					PriceUsd: "40",
					PriceTh: "30",
					PriceRelevance: "88"
				}
			],
			AdditionalInformation: "Выполняет годовой план за неделю"
		} as MarketProductDeliver;

		var products: MarketProductInStock = {
			Id: 1,
			Name: "Конфеты",
			Products: [
				{
					HashRate: "123",
					State: "В наличии",
					Count: "10",
					PriceRub: "599",
					Location: "Омск",
					Power: "999",
					ElectricityСosts: "777",
					Profitability: "888",
					Earnings: "222",
					PaybackPeriod: "111"
				},
				{
					HashRate: "456",
					State: "Заказ принят",
					Count: "20",
					PriceRub: "499",
					Location: "Тольятти",
					Power: "900",
					ElectricityСosts: "700",
					Profitability: "800",
					Earnings: "200",
					PaybackPeriod: "100"
				},
				{
					HashRate: "789",
					State: "Отгружен",
					Count: "30",
					PriceRub: "299",
					Location: "Мордор",
					Power: "1000",
					ElectricityСosts: "800",
					Profitability: "900",
					Earnings: "300",
					PaybackPeriod: "200"
				}
			],
			AdditionalInformation: "Вкусные конфеты"
		} as MarketProductInStock;

		var repairParts: MarketRepairParts = {
			Id: 1,
			Name: "Зап.части",
			Products: [{
				Count: "5",
				State: "На таможне",
				PriceRub: "100",
				Location: "Париж",
			},
			{
				Count: "10",
				State: "В пути",
				PriceRub: "200",
				Location: "Хельсинки",
			}],
			AdditionalInformation: "Доп. информация"
		} as MarketRepairParts;

		var testMarket: Market = {
			Name: 'Тестовый',
			Description: 'Магаз для теста',
			UsdRate: '36.6',
			GoogleUsdRate: '36.6',
			MiningProfitability: '100',
			ElectricityСost: '100',
			MarketProductDeliver: deliver,
			MarketProductInStock: products,
			MarketRepairParts: repairParts
		} as Market;

		return testMarket;
	}

}

export interface Market {
	"Name": string,
	"Description": string,
	"UsdRate": string,
	"GoogleUsdRate": string,
	"MiningProfitability": string,
	"ElectricityСost": string
	"MarketProductDeliver": MarketProductDeliver
	"MarketProductInStock": MarketProductInStock
	"MarketRepairParts": MarketRepairParts
}

export interface MarketProductDeliver {
	"Id": number,
	"Name": string,
	"Products": ProductDeliver[],
	"AdditionalInformation": string
}
export interface MarketProductInStock {
	"Id": number,
	"Name": string,
	"Products": ProductInStock[],
	"AdditionalInformation": string
}
export interface MarketRepairParts {
	"Id": number,
	"Name": string,
	"Products": RepairParts[],
	"AdditionalInformation": string
}

export interface Market {
	"Id": number,
	"Name": string,
	"Description": string
}
export interface ProductDeliver extends Market {
	"HashRate": string,
	"State": string,
	"PriceRub": string,
	"PriceUsd": string,
	"PriceTh": string,
	"PriceRelevance": string
}

export interface ProductInStock extends Market {
	"HashRate": string,
	"State": string,
	"Count": string,
	"PriceRub": string,
	"Location": string,
	"Power": string,
	"ElectricityСosts": string,
	"Profitability": string,
	"Earnings": string,
	"PaybackPeriod": string
}

export interface RepairParts extends Market {
	"Count": string,
	"State": string,
	"PriceRub": string,
	"Location": string
}