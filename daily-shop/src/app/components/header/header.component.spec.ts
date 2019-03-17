import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {ToastrModule} from 'ngx-toastr';
import { AppRoutingModule } from '../../app-routing.module';
import {DataTableModule} from "angular-6-datatable";

import { HeaderComponent } from './header.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CartComponent } from '../cart/cart.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductComponent } from '../product/product.component';
import { AccountComponent } from '../account/account.component';
import { AdminComponent } from '../admin/admin.component';
import { HomeComponent  } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProductDetailContentComponent } from '../product-detail/product-detail-content/product-detail-content.component';
import { ProductDetailBottomComponent } from '../product-detail/product-detail-bottom/product-detail-bottom.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { SliderComponent } from '../slider/slider.component';
import { ProductCategoryComponent } from '../product-category/product-category.component';

import { AuthService } from '../../services/auth.service';
import {MockAuthService} from '../../mock-services/MockAuthService';
import { CartService } from 'src/app/services/cart.service';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule, 
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'daily-shop'),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        ToastrModule.forRoot(),
        AppRoutingModule,
        DataTableModule,
      ],
      declarations: [ 
        HeaderComponent,
        ProductDetailComponent,
        CartComponent, 
        CheckoutComponent,
        ContactComponent,
        ProductComponent,
        AccountComponent,
        AdminComponent,
        HomeComponent,
        NotFoundComponent,
        ProductDetailContentComponent,
        ProductDetailBottomComponent,
        ProductItemComponent,
        SliderComponent,
        ProductCategoryComponent,
      ],
      providers:[
        {provide: AuthService, useClass: MockAuthService },
        CartService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#totalProductsCart is changed when call cartService.getTotalProductsCart()', () =>{
    let cartService = TestBed.get(CartService);
    spyOn(cartService, 'getTotalProductsCart').and.returnValue(2);
    
    //component.ngOnInit;
    fixture.detectChanges();
    expect(component.totalProductsCart).toBe(2);
  })

  it('#LoginForm should invalid when username is null',() => {
    component.userForm.controls['username'].setValue('');
    expect(component.userForm.invalid).toBeTruthy();
  });

  it('#LoginForm should invalid when password is null',() => {
    component.userForm.controls['password'].setValue('');
    
    expect(component.userForm.invalid).toBeTruthy();
  });

  it('#login return status 1 when successfully', () =>{
    let authService = TestBed.get(AuthService);
    let respone; 
    authService.login('user1@gmail.com', '123456').subscribe(res =>{
      respone = res;
    });
    expect(respone.status).toBe(1);
    
  });

  it('#login return status -1 when The user credentials were incorrect', ()=>{
    let authService = TestBed.get(AuthService);
    let respone; 
    authService.login('usssss', '123456').subscribe(res =>{
      respone = res;
    });
    expect(respone.status).toBe(-1);
  });
});
