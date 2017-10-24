import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  ],
  providers: [RegisterService,MailotpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
