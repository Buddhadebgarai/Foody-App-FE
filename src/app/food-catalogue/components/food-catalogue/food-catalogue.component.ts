import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodCataloguePage } from 'src/app/shared/model/foodCatalogue';
import { FoodItem } from 'src/app/shared/model/foodItem';
import { FoodCatalogueService } from '../../service/food-catalogue.service';

@Component({
  selector: 'app-food-catalogue',
  templateUrl: './food-catalogue.component.html',
  styleUrls: ['./food-catalogue.component.css']
})
export class FoodCatalogueComponent {
  restaurantId: any;
  foodItemResponse: FoodCataloguePage;
  foodItemCart: FoodItem[] = [];
  orderSummary: FoodCataloguePage;


  constructor(private route: ActivatedRoute, private foodItemService: FoodCatalogueService, private router: Router) {
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.restaurantId = +params?.get('id');
    });

    this.getFoodItemsByRestaurant(this.restaurantId);
    
  }

  getFoodItemsByRestaurant(restaurant: number) {
    this.foodItemService.getFoodItemsByRestaurant(restaurant).subscribe(
      data => {
        this.foodItemResponse = data;
        if(this.foodItemResponse.foodItemDTOList.length==0)
        {
          alert("NO FOOD Available in the Resttaurant!!")
        }
      }
    )
  }

  increment(food: any) {
    food.quantity++;
    const index = this.foodItemCart.findIndex(item => item.id === food.id);
    if (index === -1) {
      // If record does not exist, add it to the array
      this.foodItemCart.push(food);
    } else {
      // If record exists, update it in the array
      this.foodItemCart[index] = food;
    }
  }

  decrement(food: any) {
    if (food.quantity > 0) {
      food.quantity--;

      const index = this.foodItemCart.findIndex(item => item.id === food.id);
      if (this.foodItemCart[index].quantity == 0) {
        this.foodItemCart.splice(index, 1);
      } else {
        // If record exists, update it in the array
        this.foodItemCart[index] = food;
      }

    }
  }

  onCheckOut() {
    this.foodItemCart;
    this.orderSummary={
      foodItemDTOList:[],
      restaurantDTO :{}

    }
    this.orderSummary.foodItemDTOList = this.foodItemCart;
    this.orderSummary.restaurantDTO = this.foodItemResponse.restaurantDTO;
    this.router.navigate(['/orderSummary'], { queryParams: { data: JSON.stringify(this.orderSummary) } });
  }
}
