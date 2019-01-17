import { Injectable } from '@angular/core';

import { Product } from '../model/product';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsCart: any[] = [];
  orders: AngularFireList<any>;

  constructor(private firebaseDb: AngularFireDatabase) { }

  getTotalProductsCart(): number {
    let totalQuantity = 0
    if (this.productsCart.length > 0) {

      for (let i = 0; i < this.productsCart.length; i++) {
        totalQuantity += parseInt(this.productsCart[i].quantity)
      }

    }
    return totalQuantity;
  }

  getProductsCart(): any[] {
    return this.productsCart
  }

  getTotalPriceCart(): number {
    let totalPriceCart: number = 0;
    if (this.productsCart.length > 0) {

      for (let i = 0; i < this.productsCart.length; i++) {
        totalPriceCart += this.productsCart[i].totalPrice
      }

    }
    return totalPriceCart;
  }

  addToCart(product: Product) {

    let quantity = 1;
    let totalPrice = product.price * quantity;

    let productCart = {
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
      totalPrice: totalPrice
    }
    if (this.productsCart.length > 0) {
      for (let i = 0; i < this.productsCart.length; i++) {
        if (this.productsCart[i].productId == product.id) {
          let quantityTmp = ++this.productsCart[i].quantity;
          let totalPriceTmp = product.price * quantityTmp;

          let productTmp = {
            productId: product.id,
            title: product.title,
            price: product.price,
            quantity: quantityTmp,
            totalPrice: totalPriceTmp
          }

          this.productsCart.splice(i, 1, productTmp)
          //this.productsCart.push(productTmp)

          //console.log(this.productsCart[i])
          break;
        } else {
          this.productsCart.push(productCart);
          break;
        }
      }
    } else this.productsCart.push(productCart);

  }

  deleteProduct(index: number) {
    this.productsCart.splice(index, 1)
  }

  updateProductsCart(index: number, quantity: number) {
    for (let i = 0; i < this.productsCart.length; i++) {
      if (this.productsCart[i].productId == this.productsCart[index].productId) {
        let quantityTmp = quantity;
        let totalPriceTmp = this.productsCart[index].price * quantityTmp;
        let productTmp = {
          productId: this.productsCart[index].productId,
          title: this.productsCart[index].title,
          price: this.productsCart[index].price,
          quantity: quantityTmp,
          totalPrice: totalPriceTmp
        }
        this.productsCart.splice(i, 1, productTmp);
        break;
      }
    }

    console.log(this.productsCart);
  }

  addOther(order: any) {
    console.log('thanh');

    this.firebaseDb.list('carts').push(order);
  }

  getOderByUserId(userId: string): AngularFireList<any> {
    this.orders = this.firebaseDb.list('carts', ref => ref.orderByChild('userId').equalTo(userId));
    return this.orders;
  }

}
