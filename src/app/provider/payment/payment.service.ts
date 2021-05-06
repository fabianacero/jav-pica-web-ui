import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpMethod} from '../../enums/http-method.enum';
import {HttpRequestService} from '../http-request/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  users: any[] = [];
  
  constructor(private httpRequest: HttpRequestService) { }

  public paymentProduct(registerForm): Observable<any> {    
    return this.httpRequest.request('/payment/purchase', registerForm, HttpMethod.POST);
  }

    public createOrder(registerForm): Observable<any> {    
    return this.httpRequest.request('/usuario/crear/orden', registerForm, HttpMethod.POST);
  }



}
