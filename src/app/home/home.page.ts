import { Component, OnInit } from '@angular/core';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { holidayRequest } from '../utils/models/country';
import {  getAllCountriesAction, getHolidaysOfACountryAction } from './store/home.action';
import {  getAllCountrySelector } from './store/home.selector';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public allCountries$ : Observable<any>;
  public isThereCountryInList  =  false
  constructor(public store: Store<AppState>) {
    this.store.dispatch(getAllCountriesAction())
  }

  ngOnInit(){
   this.allCountries$ =  this.store.select(getAllCountrySelector);
  }


  /**
   * get list Of holiday in a country 
   */
  getLitsOfHolidaysInACountry(code){
    let holidatRequestValues : holidayRequest = {
      year : JSON.stringify(new Date().getFullYear()),
      country_code : code
    }

    this.store.dispatch(getHolidaysOfACountryAction({aCountryHolidays:holidatRequestValues}))
  }
}
