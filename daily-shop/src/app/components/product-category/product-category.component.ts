import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../../services/product-category.service';


import { Product } from '../../model/product';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  products: Product[] = [];
  productType: string = 'men';

  constructor(
    private productCategoryService: ProductCategoryService
  ) { }

  ngOnInit() {
    this.products = this.productCategoryService.getProducts(8, this.productType);
  }

  tabClick(type: string){
    this.productType = type
  }

  getProducts(size: number, type: string): Product[]{
    this.productType = type;
    this.products = this.productCategoryService.getProducts(size, type);
    return this.products
  }
}
