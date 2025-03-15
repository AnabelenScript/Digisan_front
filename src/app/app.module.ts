import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './users/UI/pages/login-user/login-user.component';
import { LoginFormComponent } from './users/UI/components/login-form/login-form/login-form.component';
import { OrderMenuComponent } from './order/UI/components/order-menu/order-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    LoginFormComponent,
    OrderMenuComponent
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
