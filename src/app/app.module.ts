import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { CreateFormComponent } from './soaps/UI/components/create-form/create-form.component';
import { CreatePageComponent } from './soaps/UI/pages/create-page/create-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SoapsTableComponent } from './soaps/UI/components/soaps-table/soaps-table.component';
import { SoapsPageComponent } from './soaps/UI/pages/soaps-page/soaps-page.component';
import { StartPageComponent } from './shared/start-page/start-page.component';
import { ConectionFormComponent } from './users/UI/components/conection-form/conection-form.component';
import { ConectionPageComponent } from './users/UI/pages/conection-page/conection-page.component';
import { LoadAnimationComponent } from './alerts/UI/load-animation/load-animation.component';
import { FormMpComponent } from './payments/UI/components/form-mp/form-mp.component';

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
    RechargeAlertComponent,
    CreateFormComponent,
    CreatePageComponent,
    NavbarComponent,
    SoapsTableComponent,
    SoapsPageComponent,
    StartPageComponent,
    ConectionFormComponent,
    ConectionPageComponent,
    LoadAnimationComponent,
    FormMpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
