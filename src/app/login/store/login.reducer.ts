import { createReducer, on } from "@ngrx/store";
import { user, userResponse } from "src/app/utils/models/user";
import * as userLoginActions from "./login.action";
import { initialAuthState, initialLoginState } from "./login.state";

export interface LoginState {
  userDetails: user | userResponse;
  message: string;
}

export const initialState: LoginState = {
  userDetails: initialAuthState,
  message: "",
};

const userLogin = createReducer(
  initialState,
  on(userLoginActions.loginAction, (state, action) => {
    return { ...state , 
      userDetails :  action.userDetails
    };
  }),

  on(userLoginActions.loginSuccessAction, (state, {userDetails}) => {
    return {
      ...state,
      userDetails : userDetails
    };
  }),
  on(userLoginActions.loginFailureAction, (state, { message }) => {
    return {
      ...state,
      message: message,
    };
  })
);

export function LoginReducer(state: any, action: any) {
  return userLogin(state, action);
}
