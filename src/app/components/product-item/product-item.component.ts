import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../model/product';

import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  addToCart(product: Product){
    this.cartService.addToCart(product)
    console.log(this.cartService.getProductsCarts())
  }
}
