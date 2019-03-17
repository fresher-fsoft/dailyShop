import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import {ToastService} from '../../services/toast.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalProductsCart: number = 0;
  isLogin: boolean = false;
  isAdmin: boolean = false;
  userForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })
  listProduct: any[] = []
  username: string;
  
  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.totalProductsCart = this.cartService.getTotalProductsCart();
  }

  ngAfterContentChecked(): void {
    this.totalProductsCart = this.cartService.getTotalProductsCart();
    this.isLogin = this.userService.getUserLogin();
    if(!this.userService.getUserLogin()){
      this.listProduct = this.cartService.getProductsCart();
    }  
  } 

  signInWithEmail(email: string, password: string) {
    this.authService.signInRegular(email, password)
      .then((res) => {
        this.isAdmin = (res.user.uid == 'HnjTZTs7fOdPyccQpA9R1NbKYGa2') ? true : false
        $("#login-modal").modal("hide");
        this.toastService.showSuccess("Login successfully");
        this.userService.setUserLogin(true);
        
      })
      .catch((err) => {
        this.toastService.showError("The user credentials were incorrect.");
      }
    );
  }

  onLogin(value){
    this.signInWithEmail(value.username, value.password);
    this.username = value.username
  }

  onLogout(){
    this.toastService.showSuccess("Logout successfully");
    this.authService.logout()
  }
}
