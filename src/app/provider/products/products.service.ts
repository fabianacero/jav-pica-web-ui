import { Injectable } from '@angular/core';

import { HttpRequestService } from '../http-request/http-request.service';
import { Observable, of } from 'rxjs';
import { ProductServiceResponse } from '../../models/product-service-response';
import { productsAndServices } from "../../mocks/productsAndServices.mock";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public enableMock = true;

  constructor(private httpRequest: HttpRequestService) {
  }

  public getAllProductsAndServices(): Observable<[ProductServiceResponse]> {
    if (this.enableMock) {
      console.log("::: <MOCK>Enable!</MOCK> :::");
      return of(productsAndServices);
    } else {
      return this.httpRequest.request('/product-service');
    }
  }
}
