import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { FoodServiceService } from '../food-service.service'

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit{
  foods:Product[]=[]

  // object creation
  constructor(private foodObj:FoodServiceService){ 
  }
  // implements methods of the services
  ngOnInit(){
    this.foods=this.foodObj.getFoods();
  }
}
