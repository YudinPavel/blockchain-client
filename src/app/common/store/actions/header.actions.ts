import { createAction, props } from "@ngrx/store";
import { HeaderElementModel } from "../../models/HeaderElement.model";

export enum headerActions {
  LOAD_HEADER_CONFIG = "[HeaderElement] LOAD_HEADER_CONFIG",
  HEADER_CONFIG_LOADED_SUCCESS = "[HeaderElement] HEADER_CONFIG_LOADED_SUCCESS",
  HEADER_CONFIG_LOADED_ERROR = "[HeaderElement] HEADER_CONFIG_LOADED_ERROR",
}

export const loadHeaderConfig = createAction(
  headerActions.LOAD_HEADER_CONFIG,
);

export const headerConfigLoadedSuccess = createAction(
  headerActions.HEADER_CONFIG_LOADED_SUCCESS,
  props<{headerConfig: HeaderElementModel[]}>(),
);

export const headerConfigLoadedError = createAction(
  headerActions.HEADER_CONFIG_LOADED_ERROR,
);
