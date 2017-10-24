import { NgModule } from '@angular/core';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
