import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ToastService } from './toast.service'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsCart: any[] = [];
  orders : AngularFireList<any>;

  constructor(
    private firebaseDb: AngularFireDatabase,
    private toastService: ToastService,
  ) { }

  getTotalProductsCart(): number{
    let totalQuantity = 0
    if(this.productsCart.length > 0){
      
      for(let i = 0; i < this.productsCart.length; i++){
        totalQuantity += parseInt(this.productsCart[i].quantity) 
      }

    }
    return totalQuantity;
  }

  getProductsCart(): any[]{
    return this.productsCart
  }

  getTotalPriceCart(): number{
    let totalPriceCart: number = 0;
    if(this.productsCart.length > 0){
      
      for(let i = 0; i < this.productsCart.length; i++){
        totalPriceCart += this.productsCart[i].totalPrice
      }

    }
    return totalPriceCart;
  }

  addToCart(product: Product){
    
    this.toastService.showSuccess('add item to cart successfully!');
    let quantity = 1;
    let totalPrice = product.price * quantity;

    let productCart = {
      productId : product.id,
      title     : product.title,
      price     : product.price,
      quantity  : quantity,
      totalPrice: totalPrice
    }

    if(this.productsCart.length > 0){
      let flag: boolean = false;
      
      for(let i = 0; i < this.productsCart.length; i++){
        if(this.productsCart[i].productId == product.id){
          flag = true;
          //this.productsCart[i].quantity =  parseInt(this.productsCart[i].quantity) + 1;
          this.productsCart[i].quantity += 1;
          // let quantityTmp = this.productsCart[i].quantity + 1;
          // let totalPriceTmp = product.price * quantityTmp;

          // let productTmp = {
          //   productId : product.id,
          //   title     : product.title,
          //   price     : product.price,
          //   quantity  : quantityTmp,
          //   totalPrice: totalPriceTmp
          // }
          // this.productsCart.splice(i, 1)
          // this.productsCart.push(productTmp)
          break;
        }
      }

      if(flag == false){
        this.productsCart.push(productCart);
      }  
    }
    else this.productsCart.push(productCart);
    
  }

  deleteProduct(index: number){
    this.productsCart.splice(index, 1);
  }

  updateProductsCart(index: number, quantity: number){
    for(let i = 0; i < this.productsCart.length; i++){
      if(this.productsCart[i].productId == this.productsCart[index].productId){
        let quantityTmp = quantity;
        let totalPriceTmp = this.productsCart[index].price * quantityTmp;
        let productTmp = {
          productId : this.productsCart[index].productId,
          title     : this.productsCart[index].title,
          price     : this.productsCart[index].price,
          quantity  : quantityTmp,
          totalPrice: totalPriceTmp
        }

        this.productsCart.splice(i, 1, productTmp)
        
        break;
      }
    }

  }

  /*addOther(order: any){
    this.firebaseDb.list('carts').push(order)
  }*/

  /*getOderByUserId(userId:string): AngularFireList<any>{
    this.orders = this.firebaseDb.list('carts',ref => ref.orderByChild('userId').equalTo(userId));
    return this.orders;
  }*/
  
  /*updateOderByUserId(userId:string){
    this.firebaseDb.list('carts',ref => ref.orderByChild('userId').equalTo(userId))
  }*/

  /*getKeyCartByUserID(userid: string) {
    let keycart = '';
    const ref = this.firebaseDb.database.ref('carts').orderByChild('userId').startAt(userid).endAt(userid);
    ref.once('value', function(snap) {
    keycart = Object.keys(snap.val())[0];
    console.log(keycart);
    });
    return keycart;
  }*/

  deleteCartAfterOrder(userId: string) {
    this.productsCart = []
    // const itemRef = this.firebaseDb.list('carts');
    // itemRef.remove(this.getKeyCartByUserID(userId));
    
  }
}
