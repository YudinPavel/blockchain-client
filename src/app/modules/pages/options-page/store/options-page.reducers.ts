import { createReducer, on } from "@ngrx/store";
import { addingOptionsError, addingOptionsSuccess, errorDeleteOption, optionLoadedSuccess, optionsLoadedError, successDeleteOption } from "./options-page.action";
import { initialOptionsState } from "./options-page.state";

export const optionsPageReducer = createReducer(
  initialOptionsState,
  on(optionLoadedSuccess, (state, action) => ({...state, options: [...state.options, action.option]})),
  on(optionsLoadedError, (state) => ({
    ...state, options: []
  })),
  on(addingOptionsSuccess, (state, action) => ({...state, options: action.options})),
  on(addingOptionsError, (state) => ({...state, options: []})),
  on(successDeleteOption, (state, action) => ({
    ...state,
    options: state.options.filter(item => item.id !== action.option.id)
  })),
  on(errorDeleteOption, (state) => ({...state, options: []})),
);
