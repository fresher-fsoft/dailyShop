import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: AngularFireList<any>
  product: AngularFireList<any>

  constructor(
    private firebaseDb: AngularFireDatabase
  ) {}

  getProducts(): AngularFireList<any>{
    this.products = this.firebaseDb.list('products')
    return this.products;
  }

  getProductById(id): AngularFireList<any>{
    this.product = this.firebaseDb.list('products', ref => 
      ref.orderByChild('id').equalTo(id)
    );
    return this.product;
  }

  getProductByType(type: string): AngularFireList<any>{
    this.product = this.firebaseDb.list('products', ref => 
      ref.orderByChild('type').equalTo(type)
    );
    return this.product;
  }


}
