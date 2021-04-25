import { Action } from '@ngrx/store';

export enum CarriesActionTypes {
  CARRIE = '[CARRIE] No Select',
  CARRIE_SELECT = '[CARRIE] Select',
  CARRIE_FAILURE = '[CARRIE] Select Failure',
}

export class Carrie implements Action {
    readonly type = CarriesActionTypes.CARRIE;
    constructor(public payload: any) {}
  }

  export class CarrieSuccess implements Action {
    readonly type = CarriesActionTypes.CARRIE_SELECT;
    constructor(public payload: any) {}
  }

  export class CarrieFailure implements Action {
    readonly type = CarriesActionTypes.CARRIE_FAILURE;
    constructor(public payload: any) {}
}

export type All =
| Carrie
| CarrieSuccess
| CarrieFailure
