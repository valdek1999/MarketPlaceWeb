import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Market, MarketService} from "../services/market-service/market.service";

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] = [];

  constructor(private marketService: MarketService, http: HttpClient, @Inject('BASE_URL') baseUrl: string, ) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));

    var market:Market = marketService.GetMarketModel()!;
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
