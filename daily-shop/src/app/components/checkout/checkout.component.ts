import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../services/order.service';
import { CartService } from './../../services/cart.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import {ToastService} from '../../services/toast.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalOrderPrice: number;
  //listCart = this.cartService.productsCart;
  uid: string;
  products: any [];
  order = {
    uid: '',
    products: [],
    shipInfo: {}
  };

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private userService: UserService,
    ) { }

  ngOnInit() {
    if(!this.userService.isLogin){
      this.router.navigate(['/home']);
    }
    // console.log(this.listCart);
    // this.cartService.productsCart = null;
    //console.log(this.cartService.getKeyCartByUserID(this.authService.loginID));
  }

  ngAfterContentChecked(): void {
    this.uid = this.authService.getUID();
    this.totalOrderPrice = this.cartService.getTotalPriceCart();
    this.products = this.cartService.getProductsCart();

    
  }

  checkout(value: any): void {
    this.order = {
      uid: this.uid,
      products: this.products,
      shipInfo: value
    }
    
    //console.log(this.order)
    // this.orderService.addOther(this.order, this.uid);
    this.toastService.showSuccess("ordered successfully!");
    this.router.navigate(['/home']);
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
  }
}