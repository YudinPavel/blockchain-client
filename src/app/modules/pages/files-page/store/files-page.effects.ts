import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ApiService } from "../../../../common/services/api.service";
import { addingNewFile, filesLoadedError, filesLoadedSuccess, loadFiles } from "./files-page.action";

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
        map((files: File[]) => (filesLoadedSuccess({files: files}))),
        catchError(() => of(filesLoadedError())),
      )),
    )

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {
  }
}
