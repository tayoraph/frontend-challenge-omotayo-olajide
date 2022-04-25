import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/utils/BaseHttp/base-http.service';
import { user } from 'src/app/utils/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService  extends BaseHttpService{
  

  public const: any;
  public theHeader: any;
  public errorHandle: any;
 public baseUrl = environment.baseUrl;

  constructor(public httpClient?: HttpClient ) {
    super()
  }


 /**
   * @todo Authenticate User
   * @param email
   * @param password 
   * 
   */

  loginUser(body: user){
   let connect = this.baseUrl + environment.login;
     return this.post<any>("", body);
  }


 


}
