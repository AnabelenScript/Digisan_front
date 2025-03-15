import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './users/UI/pages/login-user/login-user.component';
import { LoginFormComponent } from './users/UI/components/login-form/login-form/login-form.component';
import { OrderMenuComponent } from './order/UI/components/order-menu/order-menu.component';
import { OrderPageComponent } from './order/UI/pages/order-page/order-page.component';
import { LiquidsoapFormComponent } from './soaps/UI/components/liquidsoap-form/liquidsoap-form.component';
import { LiquidsoapPageComponent } from './soaps/UI/pages/liquidsoap-page/liquidsoap-page.component';
import { PowdersoapFormComponent } from './soaps/UI/components/powdersoap-form/powdersoap-form.component';
import { PowdersoapPageComponent } from './soaps/UI/pages/powdersoap-page/powdersoap-page.component';
import { SoapAlertComponent } from './soaps/UI/components/soap-alert/soap-alert.component';
import { RechargeAlertComponent } from './soaps/UI/components/recharge-alert/recharge-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    LoginFormComponent,
    OrderMenuComponent,
    OrderPageComponent,
    LiquidsoapFormComponent,
    LiquidsoapPageComponent,
    PowdersoapFormComponent,
    PowdersoapPageComponent,
    SoapAlertComponent,
    RechargeAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
