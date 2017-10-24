import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginService } from './login/login.service';
import { ErrorhandlingComponent} from './errorhandling/errorhandling.component'

import {LoginComponent} from './login/login.component';
    const routes: Routes = [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {path:'login',component:LoginComponent},
      {path:'error/:id',component:ErrorhandlingComponent}
      ] 
       @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ],
      providers: [LoginService]
    })
    export class AppRoutingModule {}