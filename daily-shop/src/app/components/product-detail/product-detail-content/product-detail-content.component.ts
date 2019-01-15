import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../model/product';



@Component({
  selector: 'app-product-detail-content',
  templateUrl: './product-detail-content.component.html',
  styleUrls: ['./product-detail-content.component.css']
})
export class ProductDetailContentComponent implements OnInit {
  @Input() productId : Product;
  productSizes = ["S", "M", "L", "XL"];
  constructor(
     
  ) { }

  ngOnInit() {
    
  }

}
