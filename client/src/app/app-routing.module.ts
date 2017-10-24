  import { NgModule }   from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { AppComponent } from './app.component';
  import { RegisterComponent} from './register/register.component';
  import {MailotpService} from './shared/mailotp.service';
  import  {MailverificationComponent} from './mailverification/mailverification.component';
  import { LoginService } from './login/login.service';
  import { ErrorhandlingComponent} from './errorhandling/errorhandling.component'
  import {LoginComponent} from './login/login.component';
  import { ForgetPassComponent } from './forget-pass/forget-pass.component';
  import {SetPasswordComponent} from './set-password/set-password.component';

  const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'error/:id',component:ErrorhandlingComponent}, 
  {path:'verify',component:MailverificationComponent},
  {path:'forgetpass',component:ForgetPassComponent},
  {path:'setpassword', component:SetPasswordComponent},
  ] 
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [LoginService]
  })
  export class AppRoutingModule {}