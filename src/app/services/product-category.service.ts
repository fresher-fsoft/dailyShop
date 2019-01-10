import { Injectable } from '@angular/core';

import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  products: Product[] = [];
  productsMen: Product[] = [];
  productsWomen: Product[] = [];

  constructor() { 
    this.products = [
      new Product(1, 't-shirt', 'men'),
      new Product(2, 'a-shirt', 'men'),
      new Product(3, 'b-shirt', 'men'),
      new Product(4, 'c-shirt', 'men'),
      new Product(5, 'd-shirt', 'men'),
      new Product(6, 'e-shirt', 'men'),
      new Product(7, 'f-shirt', 'men'),
      new Product(8, 'g-shirt', 'men'),
      new Product(1, 't-shirt', 'wonmen'),
      new Product(2, 't-shirt', 'wonmen'),
      new Product(3, 't-shirt', 'wonmen'),
      new Product(4, 't-shirt', 'wonmen'),
      new Product(5, 't-shirt', 'wonmen'),
      new Product(6, 't-shirt', 'wonmen'),
      new Product(7, 't-shirt', 'wonmen'),
      new Product(8, 't-shirt', 'wonmen'),
    ]

    this.productsMen    = this.products.filter(product => product.type == 'men')
    this.productsWomen  = this.products.filter(product => product.type == 'wonmen')
  }

  getProducts(size: number, type: string): Product[]{
    let productsTmp: Product[] = []
    
    switch(type){
      case 'men':
        productsTmp = this.productsMen.slice(0, size)
        break;
        case 'women':
        productsTmp = this.productsWomen.slice(0, size)
        break;
    }
    
    return productsTmp;
  }
}
