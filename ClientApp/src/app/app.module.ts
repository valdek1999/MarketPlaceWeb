import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MainLayoutModule } from './components/main-layout/main.layout.module';
import { WINDOW_PROVIDERS } from './services/window-service/window.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
		AppRoutingModule,
		BrowserAnimationsModule,
		MainLayoutModule,

		MaterialModule,
		FormsModule,
		HttpClientModule,
		LayoutModule
	],
	providers: [
		WINDOW_PROVIDERS
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
