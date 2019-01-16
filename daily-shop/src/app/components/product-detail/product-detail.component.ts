import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products: Product[] = [];
  productId: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.productId = {
      avilability: "",
      category: "",
      description: "",
      id: 1,
      img: "",
      price: 0,
      size: "",
      title:  "",
      type:  ""

    }
    //get productId from router link
    const id = +this.route.snapshot.paramMap.get('id');

    let x = this.productService.getProductById(id);
    x.snapshotChanges().subscribe(item => {
      // console.log(item[0]);
      
        let y = item[0].payload.toJSON();
        y["$key"] = item[0].key;
        this.products.push(y as Product);
        this.productId = this.products[0]
        //console.log(this.productId)
      });
    
  }

}
