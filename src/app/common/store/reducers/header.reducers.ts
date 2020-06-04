import { createReducer, on } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { HeaderElementModel } from '../../models/HeaderElement.model';
import { headerConfigLoadedError, headerConfigLoadedSuccess, loadHeaderConfig } from '../actions/header.actions';

const initialHeaderNavigationState: HeaderElementModel[] = [];

export const headerConfigReducer = createReducer(
  initialHeaderNavigationState,
  on(headerConfigLoadedSuccess, (state, action) => ({...state, headerConfig: action.headerConfig})),
  on(headerConfigLoadedError, (state) => ({
    ...state, headerConfig: []
  }))
)
