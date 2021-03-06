/*shivangi*/
//-----------------------Importing Modules-----------------------------------------//

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import expressUrls from './config/url';;
@Injectable()

//---------------------Exporting LoginService class----------------------------------//

export class LoginService {
  constructor(private http:Http) { }
  login(info:any): Observable<any>{
    const url=expressUrls.login; //initialising the url
    return this.http
    .post(url,info) //calling the http function
    .map((res)=>res.json())
    .catch(this._errorhandler);
   }
_errorhandler(error: Response){
	return Observable.throw(error || "Server error")
}
}