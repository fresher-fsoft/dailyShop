import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';

import { Product } from '../../model/product';
import { ToastService } from '../../services/toast.service';
declare var $: any;

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
    private toastService: ToastService,
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
    //this.cartService.updateOderByUserId('HnjTZTs7fOdPyccQpA9R1NbKYGa2')
  }

  onCheckout(){
    if(this.productsCart.length > 0){
      if(this.userService.getUserLogin() == false){
        // alert('login')
        $("#login-modal").modal("show");
      }else {
        this.router.navigate(['/checkout']);
      }
    }else{
      this.toastService.showWarning("you have to add item to cart!");
      // this.router.navigate(['/product']);
    } 
  }
}
