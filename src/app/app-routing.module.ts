import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductListsComponent } from './component/Orders/product-lists/product-lists.component';
import { OrderDetailsComponent } from './component/Orders/order-details/order-details.component';
import { UserLoginComponent } from './component/userLogin/userLogin.component';
import { MainLayoutComponent } from './component/mainLayout/mainLayout.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { authGuard } from './component/Guards/auth.guard';

const routes: Routes = [
  {path : '' ,component:MainLayoutComponent,children:[
    {path :'',redirectTo:'/Home' ,pathMatch:'full'},
    {path : 'Home', component:HomeComponent},
    {path : 'Products',component:ProductListsComponent},
    {path : 'Products/:pid',component:ProductDetailsComponent},
    {path : 'Order' , component:OrderDetailsComponent,canActivate:[authGuard]}
  ]},
  {path : 'Login',component:UserLoginComponent},
  {path : 'Logout',component:UserLoginComponent},
  {path : '**' ,component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
