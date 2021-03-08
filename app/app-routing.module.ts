import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ProductsComponent} from '../app/products/products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component'
const routes : Routes=[


{path:'products',component:ProductsComponent},
{path:'orders',component:MyOrdersComponent},
{path:'admin/orders',component:AdminOrdersComponent},
{path:'admin/products',component:ProductsComponent},
{path:'shopping-cart',component:ShoppingCartComponent},
];
@NgModule({


imports :[RouterModule.forRoot(routes)],
exports : [RouterModule]


})
export class AppRoutingModule{





}