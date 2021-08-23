import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(private http:HttpClient) { }

  addToCart(product){
    this.items.push(product);
  }

  getCart(){
    return this.items;
  }

  deleteFromCart(item) {
    return this.items = this.items.filter(i => i.id !== item.id);
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type:string,price:number}[]>('/assets/shipping.json');
  }
}
