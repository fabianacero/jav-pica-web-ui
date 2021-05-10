import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Routes} from '../../../enums/routes.enum';
import {Utilities} from '../../../utilities/utilities';
import {QuotationRequestDetail} from '../../../models/quotation-request-detail';



@Component({
  selector: 'app-resume-purchase',
  templateUrl: './resume-purchase.component.html',
  styleUrls: ['./resume-purchase.component.scss']
})
export class ResumePurchaseComponent implements OnInit {

  public routes = Routes;
  public quotationElements = [];

  constructor(private router: Router, private utilities: Utilities) { }

  ngOnInit(): void {

  }

  submit(resumeForm: NgForm){    
    if (!resumeForm.valid) {
    return false;
  }
  const currentElements = this.utilities.getFromSession('quotation');
  this.quotationElements = this.utilities.decodeJsonElement(currentElements, []);
  const newDetail = Object.assign(new QuotationRequestDetail(), this.quotationElements[0]._details[0]);
  console.log(newDetail);
  const order = {
    email: localStorage.getItem('email'),
    direccion: resumeForm.value.dir,
    valor: newDetail._amount,
    cantidad:newDetail._quantity,
    idproductprovider:newDetail._idproductprovider,
    nomproducto:newDetail._productDescription,
    proveedor:newDetail._provider,
    estado:'pagada'
  }
  console.log(order);
  localStorage.setItem('order', JSON.stringify(order));
    this.router.navigate([Routes.PAGO]);
  }

}
