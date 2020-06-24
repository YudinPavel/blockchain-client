import { createSelector } from "@ngrx/store";
import { AppState } from "../../../../common/store/state/app.state";

const selectOptions = (appState: AppState) => appState.options;

export const selectOptionsInfo = createSelector(selectOptions, (state) => state.options);

