import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDetailContentComponent } from './components/product-detail/product-detail-content/product-detail-content.component';
import { ProductDetailBottomComponent } from './components/product-detail/product-detail-bottom/product-detail-bottom.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccountComponent } from './components/account/account.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    SliderComponent,
    ProductDetailComponent,
    ProductDetailContentComponent,
    ProductDetailBottomComponent,
    SubscribeComponent,
    FooterComponent,
    CartComponent,
    NotFoundComponent,
    AccountComponent,
    ContactComponent,
    ProductCategoryComponent,
    ProductItemComponent,
    CheckoutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'daily-shop'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
