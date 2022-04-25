import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from 'src/app/utils/BaseHttp/base-http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { holidayRequest } from 'src/app/utils/models/country';
@Injectable({
  providedIn: 'root'
})
export class HomeService extends BaseHttpService{
  

  public const: any;
  public theHeader: any;
  public errorHandle: any;
 public baseUrl = environment.baseUrl;

  constructor(public httpClient?: HttpClient ) {
    super()
  }


 /**
   * @todo  get all countries
   * 
   */

  getAllCountries(): Observable<any>{
   let connect = this.baseUrl + environment.countries
     return this.get<any>(connect);
  }

  /**
   * @todo  get all countries
   * 
   */

   getHolidaysOfACountry(request: holidayRequest): Observable<any>{
    let connect = this.baseUrl + environment.holidays
      return this.post<any>(connect, request);
   }
}
