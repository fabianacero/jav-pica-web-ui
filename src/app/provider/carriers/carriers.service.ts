import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpRequestService } from "../http-request/http-request.service";
import { CarriersResponse } from "../../models/carriers-response";
import { environment } from "@environments/environment";
import { carriersMock } from "../../mocks/carriers.mock";

@Injectable({
  providedIn: 'root'
})
export class CarriersService {

  public enableMock  = environment.enableMock;

  constructor(private httpRequest: HttpRequestService) {
  }

  public getAllCarriers(): Observable<[CarriersResponse]> {
    if (this.enableMock) {
      console.log("::: <MOCK>Enable!</MOCK> :::");
      return of(carriersMock);
    } else {
      return this.httpRequest.request('/carriers');
    }
  }
}
