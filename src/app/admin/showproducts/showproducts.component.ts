import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {

  constructor(private dsObj:DataService) { }
  places:Product[]=[];

  ngOnInit(): void {
    this.dsObj.getPlacesData().subscribe(
      data=>{
        this.places=data;
      },
      err=>{}
    )
  }


}
