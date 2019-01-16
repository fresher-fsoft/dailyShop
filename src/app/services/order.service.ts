import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { CartService } from './../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: AngularFireList<any>;
  constructor(private firebaseDb: AngularFireDatabase, private cartService: CartService) { }

  addOther(producCart) {
    this.firebaseDb.list('orders').push(producCart);
  }
  deleteCartAfterOrder() {
  }

  // getOderByUserId(userId:string): AngularFireList<any>{
  //   this.orders = this.firebaseDb.list('orders',ref => ref.orderByChild('userId').equalTo(userId));
  //   return this.orders;
  // }
}
