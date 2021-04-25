import * as auth from './auth/reducers/auth.reducers';
import * as carrier from './carrier/reducers/carrier.reducers';
import { createFeatureSelector } from '@ngrx/store';

export interface AppState {
    authState: auth.State;
    carrierState: carrier.State;
  }
  
  export const reducers = {
    auth: auth.reducer,
    carrier: carrier.reducer
  };
  
  export const selectAuthState = createFeatureSelector<AppState>('auth');
  export const selectCarrierState = createFeatureSelector<AppState>('carrier');