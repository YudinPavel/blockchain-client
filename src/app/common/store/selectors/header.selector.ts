import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const selectHeaderConfig = (appState: AppState) => appState.headerConfig;

export const selectHeaderConfigInfo = createSelector(selectHeaderConfig, (state) => {
  return state
});

