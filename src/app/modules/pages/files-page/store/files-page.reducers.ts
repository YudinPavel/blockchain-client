import { createReducer, on } from "@ngrx/store";
import { addingFilesError, addingFilesSuccess, filesLoadedError, filesLoadedSuccess } from "./files-page.action";
import { initialFilesState } from "./files-page.state";

export const filesPageReducer = createReducer(
  initialFilesState,
  on(filesLoadedSuccess, (state, action) => ({...state, files: action.files})),
  on(filesLoadedError, (state) => ({
    ...state, files: []
  })),
  on(addingFilesSuccess, (state, action) => ({...state, files: action.files})),
  on(addingFilesError, (state) => ({...state, files: []}))
);
