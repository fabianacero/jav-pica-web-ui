import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from '../../models/user';
import { environment } from "@environments/environment";
import { loginMock } from "../../mocks/login.mock";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginUsersService {
  public enableMock = environment.enableMock;
  constructor(
    private http: HttpClient,
  ) { }

  public auth(_body: User): Observable<any> {


    const  headers = new  HttpHeaders().set('Content-Type',  'application/json; charset=utf-8');
    if (this.enableMock) {
      console.log("::: <MOCK>Enable!</MOCK> :::");
      return of(loginMock);
    } else {
      return this.http
      .post<any>(`/usuario/login`, _body,{headers});
    }

  }
  
}
