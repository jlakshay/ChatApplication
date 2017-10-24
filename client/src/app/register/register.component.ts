/*   * By : Rumani Jain 
     * Version : Spec 1.0   
     * Date : 24 -October - 2017  
*/


 /*importing the dependency*/
 import * as config from './config/multi_en_config.json';
 import { Component, OnInit } from '@angular/core';
 import { RegisterService } from '../shared/register.service';
 import { Router ,ActivatedRoute} from '@angular/router';
 import { MailotpService} from '../shared/mailotp.service';
 import { User } from '../User';
 import * as moment from 'moment';
 @Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css'],
  
   
 })
 //Exporting RegisterComponent class//
 export class RegisterComponent{
   /*declaration of variable*/
   data:any={};
   info:any={};
   user:User;
   public word = (<any>config).register;
   public now = moment().format('YYYY-MM-DD')
   errorMsg:string;
   constructor(private registerUser:RegisterService,
     private mailotp:MailotpService, private route:Router
     ) { }
   //register method//
   register()
   /*validate data*/
   {
     if(this.data.fullName===undefined || this.data.email===undefined ||
       this.data.password===undefined || this.data.confirmPassword===undefined || 
       this.data.contact===undefined||this.data.gender===undefined){
       alert("Fields cant be empty");
     //console.log("inside  if")
   }
   else{
     console.log("inside  else")
     if(this.data.password===this.data.confirmPassword)
     {
       this.registerUser.tempUser(this.data);
       this.mailotp.sendMailOTP(this.data.email, "Email Verification", "login")
       /*error Handling*/
       .subscribe((dataError)=>{this.errorMsg=dataError;console.log("errmsgS")});
       /*On submission ,redirected to verify page*/
       this.route.navigateByUrl('/verify');
     }
     else{
       alert("Password didn't matched");/*Give an alert!!if password donot match*/
       
     }
   }
 }
 //save method//
 save(model: User, isValid: boolean) {
   // call API to save customer
   console.log(model, isValid);
 }

 ngOnInit() {
   // initialize model here
   this.user = {
     fullName: '',
     password: '',
     email: '',
     confirmPassword:'',
     contact:'',
     dob:'',
     gender:'',
     profilePhoto:''
   }
 }

}
