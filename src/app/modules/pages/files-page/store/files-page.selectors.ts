import { createSelector } from "@ngrx/store";
import { AppState } from "../../../../common/store/state/app.state";

const selectFiles = (appState: AppState) => appState.files;

export const selectFilesInfo = createSelector(selectFiles, (state) => state.files);
