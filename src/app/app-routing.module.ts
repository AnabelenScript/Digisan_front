import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './users/UI/pages/login-user/login-user.component';
import { OrderMenuComponent } from './order/UI/components/order-menu/order-menu.component';

const routes: Routes = [
  {path: '', component: LoginUserComponent},
  {path: 'menu', component: OrderMenuComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
