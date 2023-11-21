import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisteruserComponent } from './pages/registeruser/registeruser.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisteruserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
