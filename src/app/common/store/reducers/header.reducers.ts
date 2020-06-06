import { createReducer, on } from "@ngrx/store";
import { headerConfigLoadedError, headerConfigLoadedSuccess } from "../actions/header.actions";
import { initialHeaderNavigationState } from "../state/header.state";

export const headerConfigReducer = createReducer(
  initialHeaderNavigationState,
  on(headerConfigLoadedSuccess, (state, action) => ({...state, headerConfig: action.headerConfig})),
  on(headerConfigLoadedError, (state) => ({
    ...state, headerConfig: []
  })),
);
