import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RestaurantListingComponent } from './componets/restaurant-listing.component';
import { RestaurantListingRoutingModule } from './restaurant-listing-routing.module';


@NgModule({
  declarations: [
    RestaurantListingComponent
  ],
  imports: [
    CommonModule,
    RestaurantListingRoutingModule
  ]
  

})
export class RetaurantListingModule { }
