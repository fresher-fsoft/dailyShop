import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail-bottom',
  templateUrl: './product-detail-bottom.component.html',
  styleUrls: ['./product-detail-bottom.component.css']
})
export class ProductDetailBottomComponent implements OnInit {
  @Input() description: string
  constructor() { }

  ngOnInit() {
  }

}
