import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryHolidayPageRoutingModule } from './country-holiday-routing.module';

import { CountryHolidayPage } from './country-holiday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryHolidayPageRoutingModule
  ],
  declarations: [CountryHolidayPage]
})
export class CountryHolidayPageModule {}
