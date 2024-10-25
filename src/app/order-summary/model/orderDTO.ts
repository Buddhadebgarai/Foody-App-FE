import { FoodItem } from "src/app/shared/model/foodItem";
import { Restaurant } from "src/app/shared/model/restaurant";

export interface OrderDTO {
userId?: number,
restaurentDTO?:Restaurant,
foodItemDTOList?: FoodItem[];
}