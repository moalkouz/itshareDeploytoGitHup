import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutingModule,NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
