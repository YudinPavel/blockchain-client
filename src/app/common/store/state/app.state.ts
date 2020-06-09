import { FilesState } from "../../../modules/pages/files-page/store/files-page.state";
import { HeaderState } from "./header.state";

export interface AppState {
  header: HeaderState;
  files: FilesState
}
