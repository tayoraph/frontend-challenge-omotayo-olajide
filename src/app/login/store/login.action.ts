import { createAction, props } from '@ngrx/store';
import { user, userResponse } from 'src/app/utils/models/user';

export const USER_LOGIN = '[Login Page] Login';
export const USER_LOGIN_SUCCESS = '[Login Page] Login Success';
export const USER_LOGIN_FAILURE = '[Login Page] Login Failure';

export const loginAction = createAction(
  USER_LOGIN,
   props<{userDetails: user}>()
);
export const loginSuccessAction = createAction(
  USER_LOGIN_SUCCESS,
  props<{userDetails : userResponse }>()
)

export const loginFailureAction = createAction(
  USER_LOGIN_FAILURE,
  props<{message: string}>()
)