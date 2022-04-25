import { createReducer, on } from "@ngrx/store";
import { ICountry, IHolidaysList, IListOfAllCountries } from "src/app/utils/models/country";
import { initialHomeState } from "./home.state";
import * as homeActions from "./home.action";
export interface countryState {
  aSingleCountries : ICountry
  allCountries: IListOfAllCountries,
  holidayList : IHolidaysList,
  failureMessage: string
}
export const initialState : countryState= {
  aSingleCountries : initialHomeState,
  allCountries : {countries : []},
  failureMessage :  "",
  holidayList : {holidays: []}
};

const homeReducerEvents = createReducer(
  initialState,
  on(homeActions.getAllCountriesAction, (state, action) => {
    return { ...state };
  }),

  on(homeActions.getAllCountriesActionSuccess, (state, {listOfAllCountries}) => {
    return {
      ...state,
      allCountries : listOfAllCountries
    };
  }),
  on(homeActions.getAllCountriesFailureAction, (state, { failureMessage }) => {
    return {
      ...state,
      failureMessage: failureMessage,
    };
  }),


on(homeActions.getHolidaysOfACountryAction, (state) => {
  return { ...state };
}),

on(homeActions.getHolidaysOfACountrySuccessAction, (state, {holidayListOfACountry}) => {
  return {
    ...state,
    holidayList : holidayListOfACountry
  };
}),
on(homeActions.getHolidaysOfACountryFailureAction, (state, { failureMessage }) => {
  return {
    ...state,
    failureMessage: failureMessage,
  };
})
);

export function homeReducer(state: any, action: any) {
  return homeReducerEvents(state, action);
}
