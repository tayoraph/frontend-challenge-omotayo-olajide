import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap,  } from "rxjs/operators";
import { AuthService } from "src/app/services/authService/autth.Service";
import { loaderService } from "src/app/utils/Loader/loader.service";
import * as userLoginActions from 'src/app/login/store/login.action';
import { AlertService } from "src/app/utils/alert/alert";

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    public loader: loaderService,
    public alert : AlertService
  ) {}

  LoginEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userLoginActions.loginAction),
      exhaustMap((action) => {
        this.loader.startLoaderMethod("authenticating...");
        this.router.navigate(['/home'])
        this.loader.stopLoaderMethod();
        return this.authService.loginUser(action.userDetails)
        
      })
    );
  });
}



