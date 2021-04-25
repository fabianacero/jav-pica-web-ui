import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import {Routes} from '../../../enums/routes.enum';
import {
    CarriesActionTypes,
    Carrie, CarrieSuccess, CarrieFailure,
} from '../actions/carrier.actions';

@Injectable()
export class CarrierEffects {

  public routes = Routes;

  constructor(
    private actions: Actions,
    private router: Router,
  ) {}

  
  @Effect()
  Carrie: Observable<any> = this.actions.pipe(
    ofType(CarriesActionTypes.CARRIE),
    map((action: Carrie) => action.payload),
    switchMap(payload => {
        if(payload){
      return of(new CarrieSuccess({carrier: payload}));
    }else {
      return of(new CarrieFailure({error: "No Select Carrier"}));        
    }
    }
  )
);

@Effect({ dispatch: false })

CarrieSuccess: Observable<any> = this.actions.pipe(
  ofType(CarriesActionTypes.CARRIE_SELECT),
  tap((process) => {
    localStorage.setItem('carrier', process.payload.carrier);
    this.router.navigate([Routes.PAGO]);
    
  })
);

@Effect({ dispatch: false })
CarrieFailure: Observable<any> = this.actions.pipe(
  ofType(CarriesActionTypes.CARRIE_FAILURE)
);

}
