import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogin: boolean = false;
  constructor(private firebaseDb: AngularFireDatabase) { }

  addUser(uid: string, name: string, email: string){
    this.firebaseDb.list('users').push({
      id    : uid,
      name  : name,
      email : email
    })
  }

  getUserLogin(): boolean{
    return this.isLogin
  }

  setUserLogin(isLogin: boolean){
    this.isLogin = isLogin
  }

}
