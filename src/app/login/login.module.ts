import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/login.effects';
import { SharedModule } from '../utils/components/shared.module';
import { StoreModule } from '@ngrx/store';
import { LOGIN_SEL } from './store/login.selector';
import { LoginReducer } from './store/login.reducer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([LoginEffects]),
    StoreModule.forFeature(LOGIN_SEL, LoginReducer ),
    SharedModule

  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
