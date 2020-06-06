import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { headerConfigReducer } from "./header.reducers";

export const appReducers: ActionReducerMap<AppState> = {
  header: headerConfigReducer,
};
