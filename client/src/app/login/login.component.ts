/*name-shivangi sharma
version-1.0*/
//-------------------------------Importing Module---------------------------------------------//
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import * as config from './config/multi_en_config.json';

//-------------------------------------------------------------------------------------------------//

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css'],
providers: [LoginService]
})
export class LoginComponent  implements OnInit{

/*-----------------------------Declaring the global Variables----------------------------------*/

data:any={};
info:any={};
errorMsg: string;
public word= (<any>config).login;
constructor(private loginUser:LoginService, private router:Router/*,private userlogin:LoginuserService*/) { }
ngOnInit(){ }

/*-------------------------Calling the Method from Service-------------------------------*/

login()
{
    this.loginUser.login(this.data)
    .subscribe((result)=>{
        console.log(result, "checkkkkkkkkk");

        if(result.success==false)
        {
            window.alert("Wrong password");
        }

        else if(result.success==true){
            localStorage.setItem("key",result.user.id);
           this.router.navigateByUrl('/register');
      
      console.log(result);
        }
      else if(result.error=="user not found"){
           }

    },(dataError)=>{this.errorMsg=dataError;
       this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
   });

}

}