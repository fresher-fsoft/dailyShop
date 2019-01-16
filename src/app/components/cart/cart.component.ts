import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';

import { Product } from '../../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsCart: any[] = [];
  totalOrderPrice: number = 0;

  constructor(
    private cartService: CartService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    //this.productsCart = this.cartService.getProductsCart()
  }

  valuechange($event: number, index: number){
    this.cartService.updateProductsCart(index, $event)
  }

  ngAfterContentChecked(): void {
    this.productsCart = this.cartService.getProductsCart() 
    this.totalOrderPrice = this.cartService.getTotalPriceCart() 
  }

  deleteProduct(index: number){
    this.cartService.deleteProduct(index)
  }

  onCheckout(){
    if(this.productsCart.length > 0){
      if(this.userService.getUserLogin() == false){
        alert('login')
      }else {
        this.router.navigate(['/checkout']);
      }
    }else this.router.navigate(['/product']);
  }

}
