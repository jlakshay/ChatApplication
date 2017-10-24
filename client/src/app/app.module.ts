import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import {  LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HttpModule} from '@angular/http';
import { ErrorhandlingComponent} from './errorhandling/errorhandling.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorhandlingComponent
  ],
  imports: [
    BrowserModule,RouterModule,AppRoutingModule,FormsModule,HttpModule
=======
import { AppRoutingModule} from './app-routing.module';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import  {RegisterService} from './shared/register.service';
import {MailotpService} from './shared/mailotp.service';
import  {MailverificationComponent} from './mailverification/mailverification.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,MailverificationComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,HttpModule
>>>>>>> 1628e70b3390ba7cd3b060295fcfbb506afcc660
  ],
  providers: [RegisterService,MailotpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
