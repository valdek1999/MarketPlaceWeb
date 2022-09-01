import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from "../../../material.module";
import { MainLayoutComponent } from './main.layout.component';
import { HomeComponent } from '../site-content/home/home.component';
import { CounterComponent } from '../site-content/counter/counter.component';
import { FetchDataComponent } from '../site-content/fetch-data/fetch-data.component';
import { AllProductPanelComponent } from '../site-content/market/all-market-items/all-market-items.component';
import { MarketService } from '../../services/market-service/market.service';

//import { MatSidenavModule } from '@angular/material/sidenav';
//import { MatDividerModule } from '@angular/material/divider';
//import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [
		MainLayoutComponent,
		HomeComponent,
		CounterComponent,
		FetchDataComponent,
		AllProductPanelComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule,
		FlexLayoutModule,
		MaterialModule,
		FormsModule
		//MatSidenavModule,
		//MatDividerModule,
		//MatCardModule,
	],
	providers: [
		MarketService
	]
})

export class MainLayoutModule { }
