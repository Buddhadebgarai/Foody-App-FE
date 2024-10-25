import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { RetaurantListingModule } from './restaurant-listing/restaurent-listing.module';
import { FoodCatalogueModule } from './food-catalogue/food-catalogue.module';
import { OrderSummaryModule } from './order-summary/order-summary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RetaurantListingModule,
    HttpClientModule,
    FoodCatalogueModule,
    OrderSummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
