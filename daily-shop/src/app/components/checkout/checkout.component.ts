import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../services/order.service';
import { CartService } from './../../services/cart.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalOrderPrice: number;
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
    ) { }

  ngOnInit() {
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
    
    this.orderService.addOther(this.order, this.uid);
    this.toastService.showSuccess("ordered successfully!");
    this.router.navigate(['/home']);
  }
  
}