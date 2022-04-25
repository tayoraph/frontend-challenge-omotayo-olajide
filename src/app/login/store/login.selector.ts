import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "./login.reducer";

export const LOGIN_SEL = "loginSel";

const login_selector = createFeatureSelector<LoginState>(LOGIN_SEL);

export const loginSelector = createSelector(
  login_selector,
  (state:LoginState) => {
      return state.userDetails;
    } 
)
