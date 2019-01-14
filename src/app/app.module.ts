import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

// firebase service + enviroment
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from './../environments/environment';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
