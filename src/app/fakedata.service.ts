import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor(private hc:HttpClient) { }
  getUsers():Observable <any[]>{
    return this.hc.get<any[]>('http://localhost:3000/users')
  }
  getUserById(id):Observable <any>{
    return this.hc.get<any>('http://localhost:3000/users/'+id);
  }
  getUsers2():Observable <any>{
    return this.hc.get<any>('https://reqres.in/api/unknown')
  }

}
