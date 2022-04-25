import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/utils/appState/appState';
import { loginAction } from './store/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public isLogin : boolean;
  public isProfile : boolean;
  constructor(private formBuilder: FormBuilder, public store: Store<AppState>) {
    this.initiateValidatioForm();
   }

  ngOnInit() {
    this.isLogin = true;
    this.isProfile = false;
  }
  login(){
    let userObj   = {
      email: this.loginForm.value.profile.email,
      password: this.loginForm.value.password.password
    }
    this.store.dispatch(loginAction({userDetails:userObj}))
  }

  initiateValidatioForm(){
    this.loginForm = this.formBuilder.group({
      password: [],
      profile: []
    });
  }

}
