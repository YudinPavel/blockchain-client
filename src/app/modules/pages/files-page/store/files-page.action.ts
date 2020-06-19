import { createAction, props } from "@ngrx/store";
import { MyFileModel } from "../../../../common/models/MyFile.model";

export enum filesActions {
  LOAD_FILES = "[Files] LOAD_FILES",
  FILES_LOADED_SUCCESS = "[Files] FILES_LOADED_SUCCESS",
  FILES_LOADED_ERROR = "[Files] FILES_LOADED_ERROR",

  ADD_NEW_FILE = "[Files] ADD_NEW_FILE",
  FILES_ADDING_SUCCESS = "[Files] FILES_ADDING_SUCCESS",
  FILES_ADDING_ERROR = "[Files] FILES_ADDING_ERROR",

  DELETE_FILE = "[Files] DELETE_FILE",
  SUCCESS_DELETE_FILE = "[Files] SUCCESS_DELETE_FILE",
  ERROR_DELETE_FILE = "[Files] ERROR_DELETE_FILE"
};

export const deleteFile = createAction(
  filesActions.DELETE_FILE,
  props<{ file: MyFileModel }>(),
)

export const successDeleteFile = createAction(
  filesActions.SUCCESS_DELETE_FILE,
  props<{ file: MyFileModel }>(),
)

export const errorDeleteFile = createAction(
  filesActions.ERROR_DELETE_FILE,
)

export const loadFiles = createAction(
  filesActions.LOAD_FILES,
);

export const fileLoadedSuccess = createAction(
  filesActions.FILES_LOADED_SUCCESS,
  props<{ file: MyFileModel }>(),
);

export const filesLoadedSuccess = createAction(
  filesActions.FILES_LOADED_SUCCESS,
  props<{ files: MyFileModel[] }>(),
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
  props<{ files: MyFileModel[] }>(),
);

export const addingFilesError = createAction(
  filesActions.FILES_ADDING_ERROR,
);
