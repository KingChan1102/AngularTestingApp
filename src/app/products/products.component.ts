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
      productTitle:"India-1",
      description:"We people of India solembly resolve India into a soveregin republic",
      productImage:"https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg"
    },
    {
      productTitle:"India-2",
      description:"We people of India solembly resolve India into a soveregin republic",
      productImage:"https://thecommonwealth.org/sites/default/files/styles/press_release_large/public/images/hero/taj-mahal-620.jpg?itok=PKSpaEMm"
    },
    {
      productTitle:"India-3",
      description:"We people of India solembly resolve India into a soveregin republic",
      productImage:"https://upload.wikimedia.org/wikipedia/commons/4/44/Zonal_Councils.svg"
    },
    {
      productTitle:"India-1",
      description:"We people of India solembly resolve India into a soveregin republic",
      productImage:"https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg"
    },
    {
      productTitle:"India-2",
      description:"We people of India solembly resolve India into a soveregin republic",
      productImage:"https://thecommonwealth.org/sites/default/files/styles/press_release_large/public/images/hero/taj-mahal-620.jpg?itok=PKSpaEMm"
    },
    {
      productTitle:"India-3",
      description:"We people of India solembly resolve India into a soveregin republic",
      productImage:"https://upload.wikimedia.org/wikipedia/commons/4/44/Zonal_Councils.svg"
    },
    {
      productTitle:"India-2",
      description:"We people of India solembly resolve India into a soveregin republic",
      productImage:"https://thecommonwealth.org/sites/default/files/styles/press_release_large/public/images/hero/taj-mahal-620.jpg?itok=PKSpaEMm"
    },
    {
      productTitle:"India-3",
      description:"We people of India solembly resolve India into a soveregin republic",
      productImage:"https://upload.wikimedia.org/wikipedia/commons/4/44/Zonal_Councils.svg"
    }
  ]

  productComponents=[];

  getFromChildToParent(productTitle){
    console.log(productTitle);
    this.productComponents.push(productTitle)
  }
}
