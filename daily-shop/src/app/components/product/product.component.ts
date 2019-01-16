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
  productsTmp: Product[] = [];
  productType: string = 'men'

  constructor(private productService: ProductService) { }

  ngOnInit() {
    let x = this.productService.getProducts();
    x.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        this.products.push(y as Product);

        this.productsMen    = this.products.filter(product => product.type == 'men');
        this.productsWomen  = this.products.filter(product => product.type == 'women');

        this.productsTmp = this.productsMen;
      });
    });
  }

  getProducts(type: string): Product[]{
    this.productType = type;
    
    switch(type){
      case 'men': 
        this.productsTmp = this.productsMen;
        break;
      case 'women': 
        this.productsTmp = this.productsWomen;
        break;
    }

    console.log(this.productsTmp[0])
    return this.productsTmp
  }

}
