import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: AngularFireList<any>

  constructor(
    private firebaseDb: AngularFireDatabase
  ) {}

  getProducts(): AngularFireList<any>{
    this.products = this.firebaseDb.list('products')
    return this.products;
  }
}
