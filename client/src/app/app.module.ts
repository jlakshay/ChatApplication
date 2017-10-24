import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import {  LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HttpModule} from '@angular/http';
import { ErrorhandlingComponent} from './errorhandling/errorhandling.component';
import { RegisterComponent } from './register/register.component';
import  {RegisterService} from './shared/register.service';
import {MailotpService} from './shared/mailotp.service';
import  {MailverificationComponent} from './mailverification/mailverification.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorhandlingComponent,
    RegisterComponent,MailverificationComponent

  ],
  imports: [
    BrowserModule,RouterModule,AppRoutingModule,FormsModule,HttpModule
  ],
  providers: [RegisterService,MailotpService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
