import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsCart: Product[];
  totalProductsCart  = 0;
  productsCart = [
    new Product(1, 't-shirt', 'men'),
    new Product(2, 'a-shirt', 'men'),
    new Product(3, 'b-shirt', 'men'),
  ];

  getTotalProductsCart(): number{
    return this.totalProductsCart = this.productsCart.length;
  }

  getProductsCarts(): Product[]{
    return this.productsCart;
  }

  addToCart(product: Product){
    this.productsCart.push(product);
  }
  deleteCart(list:any, i){
      list.splice(i, 1);
  }
}
