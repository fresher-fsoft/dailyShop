import { Component, OnInit } from '@angular/core';
import { ProductTableService } from './../../services/product-table.service';
import { finalize } from 'rxjs/operators'
import { AngularFireStorage } from 'angularfire2/storage';
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  items;
  imgFile;
  product= {
    id: '',
    size: ''
  };
  downloadURL;
  uploadPercent;
  constructor(private productTable: ProductTableService, private storage: AngularFireStorage) { }
  
  ngOnInit() {
    this.items = this.productTable.listProduct;
    console.log(this.items);
  }
  addProduct() {
    this.productTable.addProduct(this.product);
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe()
  }
  
}
