import { Component, OnInit } from '@angular/core';
import {products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  products = products;
  share(){
    window.alert("shared!");
  }
  onNotify(){
    window.alert("We'll notify boss!")
  }

}
