import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../services/order.service';
import { CartService } from './../../services/cart.service';
import { AuthService } from './../../services/auth.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalOrderPrice = this.cartService.getTotalPriceCart();
  listCart = this.cartService.productsCart;
  uid = this.authService.loginID;
  product = this.cartService.productsCart;
  order = {
    uid: this.uid,
    products: [] = this.product,
    shipInfo: {}
  };

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    // console.log(this.listCart);
    // this.cartService.productsCart = null;
    console.log(this.orderService.getKeyCartByUserID(this.authService.loginID));
  }

  checkout(): void {
    this.orderService.addOther(this.order, '2dki6ZAW4bV4FRhiMmDGaSOtMi53');
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
  }
}
