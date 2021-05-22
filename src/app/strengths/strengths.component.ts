import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { StrengthServiceService } from '../strength-service.service'

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.css']
})
export class StrengthsComponent implements OnInit {
  strengths:Product[]=[]
  constructor(private strObj:StrengthServiceService){

  }
  ngOnInit(){
    this.strengths=this.strObj.getStrengths();
  }
}
