import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-viewplaces',
  templateUrl: './viewplaces.component.html',
  styleUrls: ['./viewplaces.component.css']
})
export class ViewplacesComponent implements OnInit {

  searchItem:string;
  places:Product[]=[];
  constructor(private dsObj:DataService){

  }
  ngOnInit(){
    this.dsObj.getPlacesData()
    .subscribe(
      data=>{
        this.places=data;
      },
      err=>{
        console.log("err is ",err); 
      }
    )
  }
}

