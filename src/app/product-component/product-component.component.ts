import { Component, Input ,EventEmitter, Output} from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent{
  @Input() productObj:Product;

  @Output() myEvent=new EventEmitter;

  sendChildToParent(productTitle){
    this.myEvent.emit(productTitle)
  }
}
