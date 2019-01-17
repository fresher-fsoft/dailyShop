import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  keyCart: string;
  orders: AngularFireList<any>;
  constructor(private firebaseDb: AngularFireDatabase) { }

  addOther(producCart, userid) {
    console.log(producCart);
    this.firebaseDb.list('orders').push(producCart);
    this.deleteCartAfterOrder(userid);
  }
  getKeyCartByUserID(userid: string) {
    let keycart = '';
    const ref = this.firebaseDb.database.ref('carts').orderByChild('userId').startAt(userid).endAt(userid);
    ref.once('value', function(snap) {
    keycart = Object.keys(snap.val())[0];
    console.log(keycart);
    });
    return keycart;
  }

  deleteCartAfterOrder(userId: string) {
    const itemRef = this.firebaseDb.list('carts');
    itemRef.remove(this.getKeyCartByUserID(userId));
  }

  // deleteCartAfterOrder(userId: string) {
  //   const ref = this.firebaseDb.database.ref('carts');
  //   ref.orderByChild('userId').equalTo(userId).once(
  //   'value', snapshot => {
  //     const updates = {};
  //     snapshot.forEach(child => updates[child.key] = null);
  //     ref.update(updates);
  //   });
  // }
}
