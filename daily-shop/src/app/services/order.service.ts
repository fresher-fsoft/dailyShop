import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { CartService } from '../services/cart.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  keyCart: string;
  orders: AngularFireList<any>;
  constructor(private firebaseDb: AngularFireDatabase, private cartService: CartService) { }

  addOther(producCart, userid) {
    this.firebaseDb.list('orders').push(producCart);
    this.cartService.deleteCartAfterOrder(userid);
  }
  

}