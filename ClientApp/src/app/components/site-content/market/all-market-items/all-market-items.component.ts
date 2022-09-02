import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { Market, MarketService } from "../../../../services/market-service/market.service";
import { MarketItemsPageable } from './model/market-item.interface';
import { WINDOW } from 'src/app/services/window-service/window.service';

@Component({
	selector: 'app-all-market-items',
	templateUrl: './all-market-items.component.html',
	styleUrls: ['./all-market-items.component.css']
})
export class AllMarketItemsComponent {

	@Input() marketItemsPageable: MarketItemsPageable | undefined;
	@Output() paginate: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

	pageEvent!: PageEvent;

	origin = this.window.location.origin;

	constructor(private router: Router, @Inject(WINDOW) private window: Window, private marketService: MarketService) {
		console.log("AllMarketItemsComponent showed");

		// this.market = marketService.GetMarketTestModel()!;
		// console.log(this.market);

		this.marketItemsPageable = {
			items: [
				{ id: 1, title: "Магазин 1", description: "Шаурмячная", body: "Тело", headerImage: "Путь к картинке" },
				{ id: 2, title: "Магазин 2", description: "Шаурмячная", body: "Тело", headerImage: "Путь к картинке" },
				{ id: 3, title: "Магазин 3", description: "Шаурмячная", body: "Тело", headerImage: "Путь к картинке" }
			],
			meta: {
				totalItems: 3,
				totalPages: 1,
				itemsPerPage: 3,
				currentPage: 1
			},
			links: { first: "", previous: "", next: "", last: "" }
		};

		console.log(this.marketItemsPageable);

	}

	onPaginateChange(event: PageEvent) {
		event.pageIndex = event.pageIndex + 1;
		this.paginate.emit(event);
		console.log("call event onPaginateChange");
	}

	navigate(id: number) {
		this.router.navigateByUrl('all-market-items/' + id);
	}

}
