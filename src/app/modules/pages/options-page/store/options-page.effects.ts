import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { OptionModel } from "../../../../common/models/Option.model";
import { ApiService } from "../../../../common/services/api.service";
import {
  addingNewOption,
  deleteOption,
  errorDeleteOption,
  loadOptions,
  optionLoadedSuccess,
  optionsLoadedError,
  optionsLoadedSuccess,
  successDeleteOption } from "./options-page.action";

@Injectable()
export class OptionsPageEffects {

  @Effect()
  loadOptions$ = this.actions$
    .pipe(
      ofType(loadOptions),
      mergeMap(() => this.apiService.getOptions().pipe(
        map(options => (optionsLoadedSuccess({options: options}))),
        catchError(() => of(optionsLoadedError())),
      )),
    );

  @Effect()
  addOption$ = this.actions$
    .pipe(
      ofType(addingNewOption),
      mergeMap((action) => this.apiService.addOption(action.option).pipe(
        map((option: OptionModel) => (optionLoadedSuccess({option: option}))),
        catchError(() => of(optionsLoadedError())),
      )),
    );

  @Effect()
  deleteOption$ = this.actions$
    .pipe(
      ofType(deleteOption),
      mergeMap((action) => {
        return this.apiService.deleteOption(action.option).pipe(
          map((option: OptionModel) => (successDeleteOption({option: option}))),
          catchError(() => of(errorDeleteOption())),
        );
      }),
    );

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {
  }
}
