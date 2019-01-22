import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../services/admin.service';
import { finalize } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  items;
  product = {
    id: '',
    size: '',
    img: ''
  };
  downloadURL;
  uploadPercent;
  singleProduct = [];

  data : any
  constructor(private productTable: AdminService, private storage: AngularFireStorage, private firebaseDb: AngularFireDatabase) { }

  ngOnInit() {
    this.data = [
      {'name':'Anil', 'email':'anil.singh581@gmail.com' , 'age' :'34', 'city':'Noida, UP, India', 'status':'0'},
      {'name':'Anil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' ,'status':'1'},
      {'name':'Sunil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' ,'status':'0'},
      {'name':'Alok', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' ,'status':'1'},
      {'name':'Tinku', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' ,'status':'0'},
      {'name':'XYZ', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' ,'status':'1'},
      {'name':'asas', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' ,'status':'0'},
      {'name':'erer', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida','status':'0' },
      {'name':'jhjh', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' ,'status':'0'}
    ]
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
    ref.update({delete: true});
  }
  updateProduct(product) {
    const ref = this.firebaseDb.object('/products/' + product.id);
    ref.update({id: product.id, img: product.img, size: product.size});
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
    ).toPromise().then(res =>  { this.insertImgLink(); });
  }
  insertImgLink() {
    this.downloadURL.subscribe(res => { console.log('thanh' + res); this.product.img = res; });
  }

  onEdit(product){
    console.log(product);
  }

  onAdd(){

  }

  showEditForm(){
    $("#editProduct-modal").modal("show");
    
  }

  showAddForm(){
    $("#addProduct-modal").modal("show");
    
  }

  changeStatus(item){
    if(item.status == 0){
      item.status = 1;
    }else{
      item.status = 0;
    }
  }

  
}
