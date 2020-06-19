import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { MyFileModel } from "../../../../common/models/MyFile.model";
import { ApiService } from "../../../../common/services/api.service";
import { addingNewFile, filesLoadedError, fileLoadedSuccess, loadFiles, filesLoadedSuccess, deleteFile, errorDeleteFile, successDeleteFile } from "./files-page.action";

@Injectable()
export class FilesPageEffects {

  @Effect()
  loadFiles$ = this.actions$
    .pipe(
      ofType(loadFiles),
      mergeMap(() => this.apiService.getFiles().pipe(
        map(files => (filesLoadedSuccess({files: files}))),
        catchError(() => of(filesLoadedError())),
      )),
    );

  @Effect()
  addFile$ = this.actions$
    .pipe(
      ofType(addingNewFile),
      mergeMap((action) => this.apiService.addFile(action.file).pipe(
        map((file: MyFileModel) => (fileLoadedSuccess({file: file}))),
        catchError(() => of(filesLoadedError())),
      )),
    )

  @Effect()
  deleteFile$ = this.actions$
    .pipe(
      ofType(deleteFile),
      mergeMap((action) => {
        return this.apiService.deleteFile(action.file).pipe(
          map((file: MyFileModel) => (successDeleteFile({file: file}))),
          catchError(() => of(errorDeleteFile())),
        )
      }),
    )

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {
  }
}
