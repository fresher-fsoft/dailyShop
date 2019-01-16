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
  order = {
    uid: this.authService.loginID,
    products: [] = this.cartService.productsCart,
    shipInfo: {}
  }
 
  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private authService: AuthService
    ) { }

  ngOnInit() {
  }

  checkout(): void {
    this.orderService.addOther(this.order.shipInfo);
    this.orderService.deleteCartAfterOrder(this.authService.loginID);
  }

}
