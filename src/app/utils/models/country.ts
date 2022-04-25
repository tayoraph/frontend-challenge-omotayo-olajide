export interface ICountry {
  code: string;
  name: string;
}
export interface IListOfAllCountries {
  countries: [];
}
export interface IHolidays {
  date: string;
  name: string;
  local_name: string;
  country_code: string;
  regions: [];
  types: [];
}
export interface IHolidaysList {
  holidays: IHolidays[];
}

export interface holidayRequest {
  country_code: string;
  year: string;
}
