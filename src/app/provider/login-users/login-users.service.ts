import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from '../../models/user';
import { environment } from "../../../environments/environment";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginUsersService {

  constructor(
    private http: HttpClient,
  ) { }

  public auth(_body: User): Observable<any> {

    const  headers = new  HttpHeaders().set('Content-Type',  'application/json; charset=utf-8');
    return this.http
    .post<any>(`/usuario/login`, _body,{headers});
  }
  
}
