import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SupportBanComponent } from './components/support-ban/support-ban.component';
import { BrandComponent } from './components/brand/brand.component';
import { SliderModule } from 'angular-image-slider';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SupportBanComponent,
    BrandComponent,
    SubscribeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
