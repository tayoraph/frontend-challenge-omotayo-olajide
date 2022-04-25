import { createFeatureSelector, createSelector } from "@ngrx/store";
import { countryState } from "./home.reducer";

export const HOME_SEL = "homeSelector";

const get_All_Country_selector = createFeatureSelector<countryState>(HOME_SEL);

export const getAllCountrySelector = createSelector(
  get_All_Country_selector, 
  (state:countryState) => {
      return state.allCountries.countries;
    } 
)

export const getAllCountryHolidaysSelector = createSelector(
  get_All_Country_selector, 
  (state:countryState) => {
      return state.holidayList;
    } 
)
