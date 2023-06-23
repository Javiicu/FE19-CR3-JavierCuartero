import { Component } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Iproducts [] = products

  

  constructor(private cartService: CartService){

  }
  addToCart(x:number){
    alert("your product has been added to the cart!")
    this.cartService.addToCart(this.products[x])
  }
}

