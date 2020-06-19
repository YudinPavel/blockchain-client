import { MyFileModel } from "../../../../common/models/MyFile.model";

export interface FilesState {
  files: MyFileModel[]
}

export const initialFilesState: FilesState = {
  files: [],
};
