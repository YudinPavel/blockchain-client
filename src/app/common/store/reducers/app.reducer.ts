import { ActionReducerMap } from "@ngrx/store";
import { filesPageReducer } from "../../../modules/pages/files-page/store/files-page.reducers";
import { AppState } from "../state/app.state";
import { headerConfigReducer } from "./header.reducers";

export const appReducers: ActionReducerMap<AppState> = {
  header: headerConfigReducer,
  files: filesPageReducer,
};
