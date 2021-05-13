import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  foods:Product[]=[
    {
      productTitle:"Biriyani",
      description:"Biryani is a mixed rice dish originating from Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs in certain regional varieties",
      productImage:"https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg"
    },
    {
      productTitle:"Samosa",
      description:"A samosa is a South Asian fried or baked pastry with a savory filling like spiced potatoes, onions, peas, beef and other meats, or lentils...",
      productImage:"https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-500x500.jpg"
    },
    {
      productTitle:"Chicken Tikka Masala",
      description:"Chicken tikka masala is a dish consisting of roasted marinated chicken chunks in spiced curry sauce. The curry is usually creamy and orange-coloured.",
      productImage:"https://c.ndtvimg.com/2020-01/0n7il1h8_chicken-tikka-masala_625x300_21_January_20.jpg"
    },
    {
      productTitle:"Naan",
      description:"Naan is a leavened, oven-baked flatbread found in the cuisines mainly of West Asia, South Asia, Myanmar, Indonesia and the Caribbean.",
      productImage:"https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg"
    },
    {
      productTitle:"Panner Butter Masala",
      description:"Paneer makhani (also called paneer butter masala) is a slightly sweet creamy dish of paneer, originating from the Indian subcontinent, in which the gravy is prepared usually with butter (makhan), tomatoes, cashews or cream.",
      productImage:"https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1"
    },
  ]

}
