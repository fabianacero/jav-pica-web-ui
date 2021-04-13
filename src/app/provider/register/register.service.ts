import { Injectable } from '@angular/core';
import { Register } from '@models/register';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {}

  registerUser(_body: any): Observable<any> {
   let reg: Register;
   reg = {
    idType: _body.idType,
    id:_body.id,
    names:_body.names,
    surmanes:_body.surnames,
    email:_body.email,
    telephone:_body.telephone,
    password:_body.password,
    idRole:_body.role
};
    return this.http.post<any>('/usuario/registrar',reg,httpOptions);
  }
}
