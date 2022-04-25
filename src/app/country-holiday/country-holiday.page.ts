import { Component, OnInit } from '@angular/core';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { getAllCountryHolidaysSelector } from '../home/store/home.selector';
import {  IHolidaysList } from '../utils/models/country';

@Component({
  selector: 'app-country-holiday',
  templateUrl: './country-holiday.page.html',
  styleUrls: ['./country-holiday.page.scss'],
})
export class CountryHolidayPage implements OnInit {

  public holidayList : IHolidaysList;
  constructor(public store: Store<AppState>) { }

  ngOnInit(){
    this.store.select(getAllCountryHolidaysSelector).subscribe(res=>{
       this.holidayList = res
    })
  }
}

