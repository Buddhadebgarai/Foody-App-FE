import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';
import { Restaurant } from 'src/app/shared/model/restaurant';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css']
})
export class RestaurantListingComponent {

  public restaurantList: Restaurant[];
  ngOnInit()
  {
    this.getRestaurantList();
  }
  getRestaurantList() {
    this.restaurentService.getAllRestaurants().subscribe((data:any)=>{
      this.restaurantList=data;
    })
  }

  constructor(private router:Router, private restaurentService:RestaurantService)
  {

  }
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  getRandomImage(): string {
    const imageCount = 8; // Adjust this number based on the number of images in your asset folder
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`; // Replace with your image filename pattern
  }

  onButtonClick(id: any) {
    this.router.navigate(['/food-catalogue', id]);
  }



}
