import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  loginID;
  constructor(
    private _firebaseAuth: AngularFireAuth, 
    private userService: UserService
  ) { 
    this.user = _firebaseAuth.authState;
  }

  signInRegular(email, password){
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    const sigin = this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    this.getUID();
    return sigin;
  }
//test get child value
  link = 'https://stackoverflow.com/questions/38681225/how-to-remove-values-in-firebase';

  getUID () {
    this.loginID = this._firebaseAuth.auth.currentUser.uid;
  }
  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      this._firebaseAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
        this.userService.addUser(res.user.uid, value.firstName, value.email)
        alert('register success')
      }, err => {
        reject(err);
        alert('register fail')
      })
    })
  }

  logout(){
    this._firebaseAuth.auth.signOut();
    this.userService.setUserLogin(false);
  }
  
}
