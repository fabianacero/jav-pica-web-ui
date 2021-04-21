import {Injectable} from '@angular/core';

import {HttpRequestService} from '../http-request/http-request.service';
import {Observable, of} from 'rxjs';
import {productsAndServices} from '../../mocks/productsAndServices.mock';
import {ProductServiceDetail} from '@models/product-service-detail';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public enableMock = true;

  constructor(private httpRequest: HttpRequestService) {
  }

  public getAllProductsAndServices(): Observable<[ProductServiceDetail]> {
    if (this.enableMock) {
      console.log('::: <MOCK>Enable!</MOCK> :::');
      return of(productsAndServices);
    } else {
      return this.httpRequest.request('/v1/retrieve/products');
    }
  }
}
