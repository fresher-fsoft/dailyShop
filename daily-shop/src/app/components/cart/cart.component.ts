import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';

import { Product } from '../../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsCart: Product[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productsCart = this.cartService.getProductsCart()
  }

  deleteProduct(index: number){
    this.cartService.deleteProduct(index)
  }

}
