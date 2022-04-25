import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { loaderService } from "src/app/utils/Loader/loader.service";
import { AlertService } from "src/app/utils/alert/alert";
import { HomeService } from "src/app/services/home/home.service";
import * as homeActions from "./home.action";
import { of } from "rxjs";

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private homeService: HomeService,
    private router: Router,
    public loader: loaderService,
    public alert: AlertService
  ) {}

  HomeEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(homeActions.getAllCountriesAction),
      exhaustMap((action) => {
        this.loader.startLoaderMethod("getting Countries...");
        return this.homeService.getAllCountries().pipe(
          map((res: any) => {
            this.loader.stopLoaderMethod();
            return homeActions.getAllCountriesActionSuccess({
              listOfAllCountries: res,
            });
          }),
          catchError((error: any) => {
            let errorMessage = error.statusText;
            this.loader.stopLoaderMethod();
            return of(
              homeActions.getAllCountriesFailureAction({
                failureMessage: errorMessage,
              })
            );
          })
        );
      })
    );
  });

  getHolidayEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(homeActions.getHolidaysOfACountryAction),
      exhaustMap((action) => {
        this.loader.startLoaderMethod("getting holidays...");
        return this.homeService
          .getHolidaysOfACountry(action.aCountryHolidays)
          .pipe(
            map((res: any) => {
              this.loader.stopLoaderMethod();
              return homeActions.getHolidaysOfACountrySuccessAction({
                holidayListOfACountry: res,
              });
            }),
            catchError((error: any) => {
              let errorMessage = error.statusText;
              this.loader.stopLoaderMethod();
              return of(
                homeActions.getHolidaysOfACountryFailureAction({
                  failureMessage: errorMessage,
                })
              );
            })
          );
      })
    );
  });

  getHolidayListRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(homeActions.getHolidaysOfACountrySuccessAction),
        tap((action) => {
          this.router.navigate(["/country-holiday"]);
        })
      );
    },
    { dispatch: false }
  );
}
