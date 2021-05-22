import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  ngOnInit(){
  }
}
