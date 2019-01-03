import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor() { }
  public imagesUrl;
  ngOnInit() {
    this.imagesUrl  = [
      'assets/img/brand/java.png',
      'assets/img/brand/java.png',
      'assets/img/brand/java.png'
    ];
  }

}
