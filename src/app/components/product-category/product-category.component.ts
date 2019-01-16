import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  products: Product[] = [];
  productsMen: Product[] = [];
  productsWomen: Product[] = [];
  productsTmp: Product[] = [];
  productType: string = 'men';
  
  constructor(
    private productService: ProductService,  
  ) {}

  ngOnInit() {
    let x = this.productService.getProducts();
    x.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        this.products.push(y as Product);

        this.productsMen    = this.products.filter(product => product.type == 'men');
        this.productsWomen  = this.products.filter(product => product.type == 'women');

        this.productsTmp = this.productsMen.slice(0, 8);
      });
    });

  }

  getProducts(type: string): Product[]{
    this.productType = type;
    
    switch(type){
      case 'men': 
        this.productsTmp = this.productsMen.slice(0, 8);
        break;
      case 'women': 
        this.productsTmp = this.productsWomen.slice(0, 8);
        break;
    }

    //console.log(this.productsTmp[0])
    return this.productsTmp
  }
}
