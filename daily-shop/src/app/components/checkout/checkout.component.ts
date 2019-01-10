import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  order={
    products:[],
    shipInfo:{
      firstName:"",
      lastName:"",
      phoneNo:"",
      email:"",
      address:"",
      district:"",
      city: "",
      note:""
    }
  }
 
  constructor() { }

  ngOnInit() {
  }

  checkout():void{
    alert(JSON.stringify(this.order));
  }

}
