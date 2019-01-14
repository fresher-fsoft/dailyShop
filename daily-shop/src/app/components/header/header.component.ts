import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalProductsCart: number = 0;
  userForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })
  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.totalProductsCart = this.cartService.getTotalProductsCart()
  }

  ngAfterContentChecked(): void {
    this.totalProductsCart = this.cartService.getTotalProductsCart()  
  } 

  signInWithEmail(email: string, password: string) {
    this.authService.signInRegular(email, password)
       .then((res) => {
          console.log(res);
          alert('login success')
       })
       .catch((err) => {
        //.log('error: ' + err);
        alert('login fail')
      });
 }

  onLogin(value){
    this.signInWithEmail(value.username, value.password)
  }
}
