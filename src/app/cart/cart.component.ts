import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items=this.cartService.getCart();
  shippingForm=this.formBuilder.group({
    name:'',
    address:''
  });
  constructor(private cartService:CartService,
              private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
  }
  onSubmit(){
    this.items=this.cartService.clearCart();
    window.alert("Processed!" + this.shippingForm.value);
    this.shippingForm.reset;
  }

  deleteItem(item) {
    this.items = this.cartService.deleteFromCart(item);
  }

}
