import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from "../../../material.module";
import { MainLayoutComponent } from './main.layout.component';
import HomeComponent from '../site-content/home/home.component';
import { CounterComponent } from '../site-content/counter/counter.component';
import { FetchDataComponent } from '../site-content/fetch-data/fetch-data.component';
import { MarketService } from '../../services/market-service/market.service';
import { AllMarketItemsComponent } from '../site-content/market/all-market-items/all-market-items.component';

@NgModule({
	declarations: [
		MainLayoutComponent,
		HomeComponent,
		CounterComponent,
		FetchDataComponent,
		AllMarketItemsComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule,
		FlexLayoutModule,
		MaterialModule,
		FormsModule
	],
	providers: [
		MarketService
	]
})

export class MainLayoutModule { }
