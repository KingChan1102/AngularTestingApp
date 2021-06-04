import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  getPlacesData():Observable<Product[]>{
    return this.hc.get<Product[]>('http://localhost:3000/places')
  }

  createNewPlace(placeObj):Observable <any>{
    return this.hc.post('http://localhost:3000/places',placeObj);
  }

  updatePlace(modifiedPlaceObj){
    return this.hc.put('http://localhost:3000/places/'+modifiedPlaceObj.id,modifiedPlaceObj);
  }
  deletePlace(id){
    return this.hc.delete('http://localhost:3000/places/'+id)
  }
  userLoginStatus():boolean{
    if (localStorage.getItem("username")==null){

      console.log(localStorage.getItem("username"));
      return false;
    }
    else{
      console.log(localStorage.getItem("username"));
      console.log("in true");
      return true;
    }
  }
  userLogout(){
    localStorage.clear();
  }
}
