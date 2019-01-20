import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'
import { AngularFireStorage } from 'angularfire2/storage';
@Injectable({
  providedIn: 'root'
})
export class ProductTableService {
  listProduct: Observable<any[]>;
  downloadURL: Observable<string>;
  uploadPercent: Observable<number>;
  constructor(private firebaseDb: AngularFireDatabase, private storage: AngularFireStorage) { 
    this.listProduct = this.getListProduct();
   }
  
  getListProduct() {
    return this.firebaseDb.list('products').valueChanges();
  }
  getKeyProductByUserID(productId: string) {
    let keyProduct = '';
    const ref = this.firebaseDb.database.ref('carts').orderByChild('userId').startAt(productId).endAt(productId);
    ref.once('value', function(snap) {
      keyProduct = Object.keys(snap.val())[0];
    console.log(keyProduct);
    });
    return keyProduct;
  }
  addProduct(product) {
    let ref;
    let itemRef;
    ref = this.firebaseDb.database.ref('products');
    ref.push(product).then(ref =>{
      itemRef = this.firebaseDb.list('products');
      itemRef.update(ref.key, {id: ref.key});
      console.log(ref.key+ 'id product inserted');
    });
  }
  
  updateProduct() {

  }

  deleteProduct() {

  }
}
