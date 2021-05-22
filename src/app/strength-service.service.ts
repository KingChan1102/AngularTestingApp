import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StrengthServiceService {

  constructor() { }

  private strengths: Product[] = [{
    productTitle: "PSLV",
    description: "The Polar Satellite Launch Vehicle is an expendable medium-lift launch vehicle designed and operated by the Indian Space Research Organisation. ",
    productImage: "https://s3.india.com/wp-content/uploads/2020/11/pslv.jpg##image/jpg?impolicy=Medium_Widthonly&w=200"
  },
  {
    productTitle: "Brahmos",
    description: "The BrahMos is a medium-range ramjet supersonic cruise missile that can be launched from submarine, ships, aircraft, or land. It is the fastest supersonic cruise missile in the world.It is a joint venture between the Russian Federation and India's DRDO",
    productImage: "https://i.ndtvimg.com/i/2017-05/brahmos_650x400_81493840841.jpg"
  },
  {
    productTitle: "AGNI-5",
    description: "Road. Agni-V is an Indian nuclear-capable intercontinental ballistic missile developed by the DRDO. The missile is believed to have a range of around 5,000 to 8,000 km.",
    productImage: "https://api.time.com/wp-content/uploads/2018/01/gettyimages-526254446.jpg?quality=85&w=1200&h=628&crop=1"
  },
  {
    productTitle: "GSLV MK-3",
    description: "The Geosynchronous Satellite Launch Vehicle Mark III, is a three-stage medium-lift launch vehicle developed by the Indian Space Research Organisation.",
    productImage: "https://spacenews.com/wp-content/uploads/2017/06/gslvmk-iii03-879x485.jpg"
  },
  {
    productTitle: "Our Strength",
    description: "The HAL Tejas is an Indian single-engine, fourth-generation, multirole light fighter designed by the Aeronautical Development Agency (ADA) in collaboration with Aircraft Research and Design Centre (ARDC) of Hindustan Aeronautics Limited (HAL)",
    productImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/IAF_Tejas_full_size_%2832941198511%29.jpg/1200px-IAF_Tejas_full_size_%2832941198511%29.jpg"
  },]
  getStrengths():Product[]{
    return this.strengths;
  }


}
