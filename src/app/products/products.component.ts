import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:Product[]=[
    {
      productTitle:"About us",
      description:"Our rich history dates back to the great Indus Valley Civilisation. One of the ancient and advanced civilisation of that time. India is home of Indic Religions...",
      productImage:"https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
    },
    {
      productTitle:"Incredible Places",
      description:"India is the home of diversity and the bueaty.From Kashmir's Flower Valley to Kanyakumari and Rann of Kutch to Lothak Lake.India has many Incredible Places like these...",
      productImage:"https://thecommonwealth.org/sites/default/files/styles/press_release_large/public/images/hero/taj-mahal-620.jpg?itok=PKSpaEMm"
    },
    {
      productTitle:"Our Strength",
      description:"India is a diverse country. Diversity is our key for success we are leaders in Space ,Defence and Software.We are fourth powerful country the world...",
      productImage:"https://img.jagranjosh.com/imported/images/E/Articles/strength-indian-defence.jpg"
    },
    {
      productTitle:"Our Consitution",
      description:"\"We people of India having solemnly resolve India into a soveregin socialist democratic republic\" We are proud to say that India is largest Democracy...",
      productImage:"https://img.jagranjosh.com/imported/images/E/GK/Constitution-of-India-Article-32-and-Article-226.jpg"
    },
    {
      productTitle:"Indian Diaspora",
      description:"India has largest Diaspora in the world. Indian Diaspora are leaders of many domains. We are proud that they are making this world a better place to live...",
      productImage:"https://i.ytimg.com/vi/zmGV_t2ekSw/maxresdefault.jpg"
    },
    {
      productTitle:"Indian Food",
      description:"As there is a lot of cultural diversity. Here comes the delicious diverse cusines. India is home of spices. Hyderabadi Biriyani is a must try...",
      productImage:"https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg"
    },
    {
      productTitle:"Geography of India",
      description:"India has a wide verity of geographic features. There are Mountains to Attols, Plains to Plateaus , Evergreen forests to Alpine Coniferous forests",
      productImage:"https://i0.wp.com/www.newsgram.com/wp-content/uploads/2017/09/A_Valley_of_flowers_Garhwal_Uttarakhand_India.jpg"
    },
    {
      productTitle:"Our Wild-life",
      description:"India has a Diverse and Unique type of Animals. Some of Unique Animals are Sangai Deer, Asiatic Lion, Asiatic Elephant and Royal Bengal Tiger our National Animal",
      productImage:"https://lh3.googleusercontent.com/proxy/3l_V_XjKJgpbrYa5c6ACkQ6o3kKvGk6f1_O34EptkfwMaN2VoFwBppKjv0yHNi3wUsZcvUH_UpbFz98qSkCcsoldvsCCAtXcVGEKyPCfPr5J60NtviUWyPqvqosrOAsn"
    }
  ]

  productComponents=[];

  getFromChildToParent(productTitle){
    this.productComponents.push(productTitle)
  }
  getLength(){
    return this.productComponents.length
  }
}
