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
    shipInfo:{
      firstName:"",
      lastName:"",
      phoneNo:"",
      email:"",
      address:"",
      district:"",
      city: "",
      note:""
    }
  }
 
  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private authService: AuthService
    ) { }

  ngOnInit() {
  }

  checkout(): void {
    //console.log(this.cartService.productsCart);
    this.orderService.addOther(this.order);
    //alert(JSON.stringify(this.order));
    //console.log(this.authService.loginID);
  }

}
