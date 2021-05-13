import { Component, OnInit } from '@angular/core';
import {Carousel} from '../models/home.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  carousels:Carousel[]=[
    {
      carouselImage:'https://wallpapercave.com/wp/XUEg3Ty.jpg',
      carouselHeading:'Magnificent Places',
      carouselPara:'View all the fantastic places in India which will be a lifetime experience'
    },
    {
      carouselImage:'https://curlytales.com/wp-content/uploads/2020/07/Biryani-1.jpg',
      carouselHeading:'Indian Food',
      carouselPara:'Explore the rich dishes of India. We can promise you that you will become a fan of our Cuisine'
    },
    {
      carouselImage:'https://www.indianfolk.com/wp-content/uploads/2018/08/indian-flag-a11.jpg',
      carouselHeading:'Indian Democracy',
      carouselPara:'We are the largest Democracy with 1.3 Billion people of diverse cultures. We built a Nation whose Strenght is its diversity'
    }
  ]
  activeStatus="active";
  isActive(index){
    console.log(1);
    if(index>0){
      return "";
    }
    else{
      return this.activeStatus;
  }
}

}
