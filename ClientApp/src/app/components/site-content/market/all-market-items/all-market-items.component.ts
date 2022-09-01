import { Component } from '@angular/core';
import { Market, MarketService } from "../../../../services/market-service/market.service";

@Component({
	selector: 'app-all-product-panel',
	templateUrl: './all-product-panel.component.html',
	styleUrls: ['./all-product-panel.component.css']
})
export class AllProductPanelComponent {

	constructor(private marketService: MarketService) {

		var market: Market = marketService.GetMarketModel()!;
	}

}
