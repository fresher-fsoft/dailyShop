import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../model/product';
import { CartService } from '../../../services/cart.service';


@Component({
  selector: 'app-product-detail-content',
  templateUrl: './product-detail-content.component.html',
  styleUrls: ['./product-detail-content.component.css']
})
export class ProductDetailContentComponent implements OnInit {
  @Input() productId : Product;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    
  }
  addToCart(product: Product){
    this.cartService.addToCart(product)
  }

  // onChange(value){
  //   console.log(value)
  // }
}
