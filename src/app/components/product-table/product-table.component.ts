import { Component, OnInit } from '@angular/core';
import { ProductTableService } from './../../services/product-table.service';
import { finalize } from 'rxjs/operators';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  items;
  imgLink;
  product = {
    id: '',
    size: '',
    img: ''
  };
  downloadURL;
  uploadPercent;
  singleProduct = [];
  constructor(private productTable: ProductTableService, private storage: AngularFireStorage, private firebaseDb: AngularFireDatabase) { }

  ngOnInit() {
    // this.product = {
    //   id: '-LWiYWtOfgSVZlw3INYu',
    //   size: '124567889',
    //   img: 'dfgdfgdfgd'
    // };
    // this.updateProduct(this.product);
    this.items = this.productTable.listProduct;
    console.log(this.items);
  }
  addProduct() {
    this.productTable.addProduct(this.product);
  }
  deleteProduct(productId) {
    const ref = this.firebaseDb.object('/products/' + productId);
    ref.update({ delete: true });
  }
  updateProduct(product) {
    const ref = this.firebaseDb.object('/products/' + product.id);
    ref.update({ id: product.id, img: product.img, size: product.size });
  }
  getProductById(productID) {
    //const object = this.firebaseDb.list('/products', ref => ref.orderByChild('id').equalTo(productID));
    // const object = this.firebaseDb.object('/products/' + productID);
    // object.valueChanges().subscribe(query => this.singleProduct = query);
    // console.log(this.singleProduct[0].id);
    this.singleProduct.splice(0);
    const data = this.firebaseDb.object('/products/' + productID);
    data.valueChanges()
      .subscribe(res => this.singleProduct.push(res));
    console.log(this.singleProduct);
  }
  async uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    await task.snapshotChanges().pipe(
      finalize(async () => {
        this.downloadURL = fileRef.getDownloadURL();
      })
    ).toPromise().then(res =>  {this.imgLink = res; this.insertImgLink(); });
  }
  insertImgLink() {
    this.downloadURL.subscribe(res => { console.log('thanh' + res); this.product.img = res; });
  }

}
