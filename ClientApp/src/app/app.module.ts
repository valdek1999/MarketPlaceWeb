import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './deliver-page/home.component';
import { CounterComponent } from './products-in-stock-page/counter.component';
import { FetchDataComponent } from './repairs-page/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDeliverComponent } from './deliver-page/product-deliver/product-deliver.component';
import { ProductInStockComponent } from './products-in-stock-page/product-in-stock/product-in-stock.component';
import { ProductRepairComponent } from './repairs-page/product-repair/product-repair.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatButton} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { DeliverModalComponent } from './deliver-page/deliver-modal/deliver-modal.component';
import {Dialog, DIALOG_DATA} from "@angular/cdk/dialog";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProductDeliverComponent,
    ProductInStockComponent,
    ProductRepairComponent,
    DeliverModalComponent
  ],
    imports: [
        BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'products-in-stock-page', component: CounterComponent},
            {path: 'repairs-page', component: FetchDataComponent},
        ]),
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatChipsModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatDialogModule
    ],
  providers: [Dialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
