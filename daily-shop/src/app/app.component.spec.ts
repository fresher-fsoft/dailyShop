

import { TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {ToastrModule} from 'ngx-toastr';



import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import {FooterComponent} from './components/footer/footer.component';

import {ToastService} from './services/toast.service';




describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'daily-shop'),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        ToastrModule.forRoot(),
        
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        FooterComponent
      ],
      providers:[
        ToastService
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'daily-shop'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('daily-shop');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to daily-shop!');
  // });
});
