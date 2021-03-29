import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {products } from '../products';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;
  constructor(private route:ActivatedRoute,
              private cartService : CartService) { }

  ngOnInit(): void {
    //taking activated route
    const routeParam = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParam.get('productId'));

      // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id == productIdFromRoute);

  }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert(product.name + " added!")
  }

}
