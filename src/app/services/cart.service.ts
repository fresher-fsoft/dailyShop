import { Injectable } from '@angular/core';

import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsCart: Product[];
  totalProductsCart: number = 0;

  constructor() { 
    this.productsCart = [
      new Product(1, 't-shirt', 'men'),
      new Product(2, 'a-shirt', 'men'),
      new Product(3, 'b-shirt', 'men'),
    ]  
  }

  getTotalProductsCart(): number{
    return this.totalProductsCart = this.productsCart.length;
  }

  getProductsCarts(): Product[]{
    return this.productsCart
  }

  addToCart(product: Product){
    this.productsCart.push(product)
  }
}
