import { createAction, props } from "@ngrx/store";

export enum filesActions {
  LOAD_FILES = "[Files] LOAD_FILES",
  FILES_LOADED_SUCCESS = "[Files] FILES_LOADED_SUCCESS",
  FILES_LOADED_ERROR = "[Files] FILES_LOADED_ERROR",

  ADD_NEW_FILE = "[Files] ADD_NEW_FILE",
  FILES_ADDING_SUCCESS = "[Files] FILES_ADDING_SUCCESS",
  FILES_ADDING_ERROR = "[Files] FILES_ADDING_ERROR"
};

export const loadFiles = createAction(
  filesActions.LOAD_FILES,
);

export const filesLoadedSuccess = createAction(
  filesActions.FILES_LOADED_SUCCESS,
  props<{ files: File[] }>(),
);

export const filesLoadedError = createAction(
  filesActions.FILES_LOADED_ERROR,
);

export const addingNewFile = createAction(
  filesActions.ADD_NEW_FILE,
  props<{ file: File }>(),
);

export const addingFilesSuccess = createAction(
  filesActions.FILES_ADDING_SUCCESS,
  props<{ files: File[] }>(),
);

export const addingFilesError = createAction(
  filesActions.FILES_ADDING_ERROR,
);
