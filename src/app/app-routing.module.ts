import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './users/UI/pages/login-user/login-user.component';
import { OrderMenuComponent } from './order/UI/components/order-menu/order-menu.component';
import { OrderPageComponent } from './order/UI/pages/order-page/order-page.component';
import { LiquidsoapPageComponent } from './soaps/UI/pages/liquidsoap-page/liquidsoap-page.component';
import { PowdersoapPageComponent } from './soaps/UI/pages/powdersoap-page/powdersoap-page.component';
import { CreatePageComponent } from './soaps/UI/pages/create-page/create-page.component';
import { SoapsPageComponent } from './soaps/UI/pages/soaps-page/soaps-page.component';
import { StartPageComponent } from './shared/start-page/start-page.component';
import { ConectionPageComponent } from './users/UI/pages/conection-page/conection-page.component';

const routes: Routes = [
  {path: '', component: LoginUserComponent},
  {path: 'menu', component: OrderPageComponent},
  {path: 'liquid', component: LiquidsoapPageComponent},
  {path: 'powder', component: PowdersoapPageComponent},
  {path: 'createsoap', component: CreatePageComponent},
  {path: 'soaps', component: SoapsPageComponent},
  {path: 'dashboard', component: StartPageComponent},
  {path: 'connection', component: ConectionPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
