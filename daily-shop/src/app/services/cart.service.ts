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
    
    ]  
  }

  getTotalProductsCart(): number{
    return this.totalProductsCart = this.productsCart.length;
  }

  getProductsCart(): Product[]{
    return this.productsCart
  }

  addToCart(product: Product){
    this.productsCart.push(product)
  }

  deleteProduct(index: number){
    this.productsCart.splice(index, 1)
  }
  
}
