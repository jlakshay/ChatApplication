import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent} from './register/register.component';
import {MailotpService} from './shared/mailotp.service';
import  {MailverificationComponent} from './mailverification/mailverification.component';


const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
 {path:'register',component:RegisterComponent},
  {path:'verify',component:MailverificationComponent}

]

    @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ],
      providers: []
    })
    export class AppRoutingModule {}