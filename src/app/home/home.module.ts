import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HomeService } from '../services/home/home.service';
import { HOME_SEL } from './store/home.selector';
import { homeReducer } from './store/home.reducer';
import { HomeEffects } from './store/home.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    StoreModule.forFeature(HOME_SEL, homeReducer ),
    EffectsModule.forFeature([HomeEffects]),
  ],
  declarations: [HomePage],
  providers : [HomeService]
})
export class HomePageModule {}
