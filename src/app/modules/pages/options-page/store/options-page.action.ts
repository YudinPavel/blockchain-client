import { createAction, props } from "@ngrx/store";
import { OptionModel } from "../../../../common/models/Option.model";

export enum optionsActions {
  LOAD_OPTIONS = "[Options] LOAD_OPTIONS",
  OPTIONS_LOADED_SUCCESS = "[Options] OPTIONS_LOADED_SUCCESS",
  OPTIONS_LOADED_ERROR = "[Options] OPTIONS_LOADED_ERROR",

  ADD_NEW_OPTION = "[Options] ADD_NEW_OPTION",
  OPTIONS_ADDING_SUCCESS = "[Options] OPTIONS_ADDING_SUCCESS",
  OPTIONS_ADDING_ERROR = "[Options] OPTIONS_ADDING_ERROR",

  DELETE_OPTION = "[Options] DELETE_OPTION",
  SUCCESS_DELETE_OPTION = "[Options] SUCCESS_DELETE_OPTION",
  ERROR_DELETE_OPTION = "[Options] ERROR_DELETE_OPTION"
};

export const deleteOption = createAction(
  optionsActions.DELETE_OPTION,
  props<{ option: OptionModel }>(),
)

export const successDeleteOption = createAction(
  optionsActions.SUCCESS_DELETE_OPTION,
  props<{ option: OptionModel }>(),
)

export const errorDeleteOption = createAction(
  optionsActions.ERROR_DELETE_OPTION,
)

export const loadOptions = createAction(
  optionsActions.LOAD_OPTIONS,
);

export const optionLoadedSuccess = createAction(
  optionsActions.OPTIONS_LOADED_SUCCESS,
  props<{ option: OptionModel }>(),
);

export const optionsLoadedSuccess = createAction(
  optionsActions.OPTIONS_LOADED_SUCCESS,
  props<{ options: OptionModel[] }>(),
);

export const optionsLoadedError = createAction(
  optionsActions.OPTIONS_LOADED_ERROR,
);

export const addingNewOption = createAction(
  optionsActions.ADD_NEW_OPTION,
  props<{ option: OptionModel }>(),
);

export const addingOptionsSuccess = createAction(
  optionsActions.OPTIONS_ADDING_SUCCESS,
  props<{ options: OptionModel[] }>(),
);

export const addingOptionsError = createAction(
  optionsActions.OPTIONS_ADDING_ERROR,
);
