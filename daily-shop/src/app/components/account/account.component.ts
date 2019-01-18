import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {ToastService} from '../../services/toast.service'


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    
  }

  onRegister(value: any){
    if(value.password == value.confirmPassword){
      this.authService.doRegister(value)
      
    }else{
      // alert('confirm password not right')
      this.toastService.showError("confirm password wrong!");
    }
    
  }
}
