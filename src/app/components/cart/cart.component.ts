import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../model/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProduct: Product[];
  public listCart;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.listCart = this.getCartProduct();
    console.log(this.listCart);
  }

  getCartProduct(){
    return this.cartService.productsCart;
  }
  deleteCartItem(i){
    this.cartService.deleteCart(this.listCart, i);
  }
}
