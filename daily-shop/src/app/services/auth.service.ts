
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {ToastService} from './toast.service'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  loginID;
  constructor(
    private _firebaseAuth: AngularFireAuth, 
    private userService: UserService,
    private angularFireDatabase: AngularFireDatabase,
    private toastService: ToastService,
    private router: Router,

  ) { 
    this.user = _firebaseAuth.authState;
  }

  signInRegular(email, password){
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    const sigin = this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    //this.getUID();
    //this.loginID = this._firebaseAuth.auth.currentUser.uid;
    return sigin;
  }
  
  getUID(): any{
    
    return this.loginID;
  }
  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      this._firebaseAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
        this.userService.addUser(res.user.uid, value.firstName, value.email)
        this.router.navigate(['/home']);
        this.toastService.showSuccess("register successfully!")
      }, err => {
        reject(err);
        this.toastService.showError(err);
      })
    })
  }

  logout(){
    this._firebaseAuth.auth.signOut();
    this.userService.setUserLogin(false);
  }
  
}
