import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegister(value: any){
    if(value.password == value.confirmPassword){
      this.authService.doRegister(value)
      this.router.navigate['/home']
    }else{
      alert('confirm password not right')
      this.router.navigate['home']
    }
    
  }
}
