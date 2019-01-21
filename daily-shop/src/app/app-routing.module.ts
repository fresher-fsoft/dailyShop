import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AccountComponent } from './components/account/account.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path: 'product-detail/:id',  component: ProductDetailComponent},
  {path: 'cart',                component: CartComponent},
  {path: 'checkout',            component: CheckoutComponent},
  {path: 'contact',             component: ContactComponent},
  {path: 'product',             component: ProductComponent},
  {path: 'account',             component: AccountComponent},
  {path: 'admin',               component: AdminComponent},
  {path: 'home',                component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**',                  component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
