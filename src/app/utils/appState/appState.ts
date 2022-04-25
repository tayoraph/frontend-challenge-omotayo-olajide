import { ActionReducerMap } from "@ngrx/store";
import { homeReducer } from "src/app/home/store/home.reducer";
import { LoginReducer } from "src/app/login/store/login.reducer";
import { userResponse } from "../models/user";


export interface AppState{
    login: userResponse,
    home: any
}


export const reducers = { 
    login : LoginReducer,
    home: homeReducer
  };
