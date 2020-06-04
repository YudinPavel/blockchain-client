import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'
import { ApiService } from '../../services/api.service';
import { headerConfigLoadedError, headerConfigLoadedSuccess, loadHeaderConfig } from '../actions/header.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class HeaderConfigEffects {

  @Effect()
  loadHeaderConfig$ = this.actions$
    .pipe(
      ofType(loadHeaderConfig),
      mergeMap(() => this.apiService.getHeaderElements().pipe(
        map(headerConfig => (headerConfigLoadedSuccess({headerConfig: headerConfig}))),
        catchError(() => of(headerConfigLoadedError()))
      ))
    );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {
  }
}
