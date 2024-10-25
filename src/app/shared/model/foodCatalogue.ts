import { FoodItem } from "./foodItem";
import { Restaurant } from "./restaurant";

export interface FoodCataloguePage{
    foodItemDTOList:FoodItem[];
    restaurantDTO:Restaurant;
}