
import { CarriesActionTypes, All } from '../actions/carrier.actions';

export interface State {
    carrier: Object | null;
    errorMessage: string | null;
}

export const initialState: State = {
    carrier: null,
    errorMessage: null   
}

export function reducer(state = initialState, action: All): State {
    switch (action.type) {
      case CarriesActionTypes.CARRIE_SELECT: {
        return {
          ...state,
          errorMessage: null
        };
      }

      case CarriesActionTypes.CARRIE_FAILURE: {
        return {
          ...state,
          errorMessage: 'Mensajeria no seleccionada, error.'
        };
      }
 
      default: {
        return state;
      }
    }
  }