import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  productsMen: Product[] = [];
  productsWomen: Product[] = [];
  productType: string = 'men'

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts('men');

  }

  getProducts(type: string): Product[]{
    this.productType = type;
    
    switch(type){
      case 'men': 
        this.productsMen = [];
        let x = this.productService.getProductByType('men');
        x.snapshotChanges().subscribe(item => {
          item.forEach(element => {
            let y = element.payload.toJSON();
            y["$key"] = element.key;
            this.productsMen.push(y as Product);
            this.products = this.productsMen.slice(0, 8);
          });
        });
        break;
      case 'women': 
        this.productsWomen = [];
        let z = this.productService.getProductByType('women');
        z.snapshotChanges().subscribe(item => {
          item.forEach(element => {
            let y = element.payload.toJSON();
            y["$key"] = element.key;
            this.productsWomen.push(y as Product);
            this.products = this.productsWomen.slice(0, 8);
          });
        });
        break;
    }
    return this.products
  }

}
