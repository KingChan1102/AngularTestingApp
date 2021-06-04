import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Place } from 'src/app/models/places.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {

  date=new Date();
  constructor(private dsObj:DataService,private router:Router) { }
  places:Product[]=[];
  editPlaceIndex;
  editPlaceObj=new Place('','','');
  editStatus:boolean=false;

  ngOnInit(): void {
    this.getPlaces();
  }
  getPlaces(){
    this.dsObj.getPlacesData().subscribe(
      data=>{
        this.places=data;
      },
      err=>{}
    )

  }
  editPlace(placeObj,ind){
    this.editPlaceIndex=ind;
    this.editPlaceObj=placeObj;
    this.editStatus=true;
    console.log("place to be modified", placeObj);
  }
  onSave(modifiedPlaceObj){
    this.editStatus=false;
    modifiedPlaceObj.id=this.editPlaceObj['id'];
    modifiedPlaceObj.productImage=this.editPlaceObj['productImage'];
    this.dsObj.updatePlace(modifiedPlaceObj).subscribe(
      data=>{console.log('success')},
      err=>{console.log('err is ',err)}
      );
  }
  deletePlace(delPlace){
    this.dsObj.deletePlace(delPlace.id).subscribe(
      data=>{
        console.log("Success");
        alert("Mobile deleted");
        this.getPlaces();
      },
      err=>{
        console.log('err is ',err)
      }
    )
  }


}
