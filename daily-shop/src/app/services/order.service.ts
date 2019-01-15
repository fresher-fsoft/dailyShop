import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders : AngularFireList<any>;
  constructor(private firebaseDb: AngularFireDatabase) { }

  addOther(order: any){
    this.firebaseDb.list('orders').push(order)
  }

  getOderByUserId(userId:string): AngularFireList<any>{
    this.orders = this.firebaseDb.list('orders',ref => ref.orderByChild('userId').equalTo(userId));
    return this.orders;
  }
}
