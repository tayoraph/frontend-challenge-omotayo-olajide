import { createAction, props } from '@ngrx/store';
import { holidayRequest, ICountry, IHolidaysList, IListOfAllCountries } from 'src/app/utils/models/country';

export const GET_ALL_COUNTRIES = '[GET ALL COUNTRIES] getAllCountries';
export const GET_ALL_COUNTRIES_SUCCESS = '[GET ALL COUNTRIES SUCCESS] getAllCountries Success';
export const GET_ALL_COUNTRIES_FAILURE = '[GET ALL COUNTRIES FAILURE] getAllCountries Failure';

export const getAllCountriesAction = createAction(
  GET_ALL_COUNTRIES
);
export const getAllCountriesActionSuccess = createAction(
  GET_ALL_COUNTRIES_SUCCESS,
  props<{listOfAllCountries : IListOfAllCountries }>()
)

export const getAllCountriesFailureAction = createAction(
  GET_ALL_COUNTRIES_FAILURE,
  props<{failureMessage: string}>()
)


// get holidays of a country

export const GET_HOLIDAYS_OF_A_COUNTRY = '[GET HOLIDAYS OF A COUNTRY] getHolidaysOfACountry';
export const GET_HOLIDAYS_OF_A_COUNTRY_SUCCESS = '[GET HOLIDAYS OF A COUNTRY SUCCESS] getHolidaysOfACountry Success';
export const GET_HOLIDAYS_OF_A_COUNTRY_FAILURE = '[GET HOLIDAYS OF A COUNTRY FAILURE] getHolidaysOfACountry Failure';

export const getHolidaysOfACountryAction = createAction(
  GET_HOLIDAYS_OF_A_COUNTRY,
  props<{aCountryHolidays : holidayRequest }>()
);
export const getHolidaysOfACountrySuccessAction = createAction(
  GET_HOLIDAYS_OF_A_COUNTRY_SUCCESS,
  props<{holidayListOfACountry : IHolidaysList }>()
)

export const getHolidaysOfACountryFailureAction = createAction(
  GET_HOLIDAYS_OF_A_COUNTRY_FAILURE,
  props<{failureMessage: string}>()
)