import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryHolidayPage } from './country-holiday.page';

const routes: Routes = [
  {
    path: '',
    component: CountryHolidayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryHolidayPageRoutingModule {}
