import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";

const selectHeaderConfig = (appState: AppState) => appState.header;

export const selectHeaderConfigInfo = createSelector(selectHeaderConfig, (state) => state.headerConfig);
