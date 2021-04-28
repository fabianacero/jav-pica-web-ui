import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import {
  AuthActionTypes,
  LogIn, LogInSuccess, LogInFailure,
} from '../actions/auth.actions';

import { LoginUsersService } from '@provider/login-users/login-users.service';
import {Utilities} from '../../../utilities/utilities';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: LoginUsersService,
    private router: Router,
    private utilities: Utilities,
  ) {}

  
  @Effect()
  LogIn: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: LogIn) => action.payload),
    switchMap(payload => {
      return this.authService.auth(payload).pipe(
        map((process) => {
          console.log(process);
          if(process.respuesta.statusCode > 0){
          return new LogInFailure({ error: process.message });
          }else{
          return new LogInSuccess({id: process.usuarioDto.id, name:process.usuarioDto.names, email: process.usuarioDto.email, idRole: process.usuarioDto.idRole});
        }
        }),
        catchError((error) => {
          console.log(error);
          return of(new LogInFailure({ error: error }));
        })
      )
    }
  )
);

@Effect({ dispatch: false })

LogInSuccess: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.LOGIN_SUCCESS),
  tap((process) => {
    localStorage.setItem('name', process.payload.name);
    localStorage.setItem('email', process.payload.email);
    localStorage.setItem('idRole', process.payload.idRole);
    localStorage.setItem('id', process.payload.id);
    this.utilities.saveOnSession('session', process.payload);
    this.router.navigateByUrl(localStorage.getItem('previousUrl'));
  })
);

@Effect({ dispatch: false })
LogInFailure: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.LOGIN_FAILURE)
);

}
