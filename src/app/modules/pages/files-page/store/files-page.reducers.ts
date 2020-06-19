import { createReducer, on } from "@ngrx/store";
import { addingFilesError, addingFilesSuccess, filesLoadedError, fileLoadedSuccess, successDeleteFile, errorDeleteFile } from "./files-page.action";
import { initialFilesState } from "./files-page.state";

export const filesPageReducer = createReducer(
  initialFilesState,
  on(fileLoadedSuccess, (state, action) => ({...state, files: [...state.files, action.file]})),
  on(filesLoadedError, (state) => ({
    ...state, files: []
  })),
  on(addingFilesSuccess, (state, action) => ({...state, files: action.files})),
  on(addingFilesError, (state) => ({...state, files: []})),
  on(successDeleteFile, (state, action) => ({
    ...state,
    files: state.files.filter(item => item.id !== action.file.id)
  })),
  on(errorDeleteFile, (state) => ({...state, files: []})),
);
