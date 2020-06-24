import { FilesState } from "../../../modules/pages/files-page/store/files-page.state";
import { OptionsState } from "../../../modules/pages/options-page/store/options-page.state";
import { HeaderState } from "./header.state";

export interface AppState {
  header: HeaderState;
  files: FilesState;
  options: OptionsState;
}
