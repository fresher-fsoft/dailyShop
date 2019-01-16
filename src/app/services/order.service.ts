import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: AngularFireList<any>;
  constructor(private firebaseDb: AngularFireDatabase) { }

  addOther(producCart) {
    console.log(producCart);
    this.firebaseDb.list('orders').push(producCart);
  }
  deleteCartAfterOrder(userId: string) {
    const ref = this.firebaseDb.database.ref('carts');
    ref.orderByChild('userId').equalTo(userId).once(
    'value', snapshot => {
      const updates = {};
      snapshot.forEach(child => updates[child.key] = null);
      ref.update(updates);
    });
  }
}
