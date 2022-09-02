import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./components/site-content/counter/counter.component";
import { FetchDataComponent } from "./components/site-content/fetch-data/fetch-data.component";
import HomeComponent from "./components/site-content/home/home.component";
import { MainLayoutComponent } from "./components/main-layout/main.layout.component";
import { AllMarketItemsComponent } from "./components/site-content/market/all-market-items/all-market-items.component";

const routes: Routes = [{
	path: '',
	component: MainLayoutComponent,
	children: [{
		path: '',
		component: HomeComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'all-market-items',
		component: AllMarketItemsComponent
	},
	{
		path: 'counter',
		component: CounterComponent
	},
	{
		path: 'fetch-data',
		component: FetchDataComponent
	}
	]
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
