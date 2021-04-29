import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Utilities} from '../../utilities/utilities';
import {QuotationRequest} from '../../models/quotation-request';
import {QuotationRequestDetail} from '../../models/quotation-request-detail';

@Component({
  selector: 'app-resumeProducts',
  templateUrl: './resumeProducts.component.html',
  styleUrls: ['./resumeProducts.component.scss']
})
export class resumeProductsComponent implements OnInit {

  @Input() resumeProducts: any;
  @Output() resumeProductsEvent = new EventEmitter();
  public products = [];
  public hasTemporalQuotes = false;
  public temporalQuotations = [];
  public quotationElements = [];

  constructor(private utilities: Utilities) { }

  ngOnInit(): void {
    const currentElements = this.utilities.getFromSession('quotation');
    this.getQuoteElementsFromStorage(currentElements);
  }

  protected getQuoteElementsFromStorage(elements) {
    this.quotationElements = [];
    this.quotationElements = this.utilities.decodeJsonElement(elements, []);
    this.quotationElements.forEach((quote) => {
      const quotationRequest = Object.assign(new QuotationRequest(), quote);
      Object.values(quotationRequest.details).forEach((detail) => {
        const newDetail = Object.assign(new QuotationRequestDetail(), detail);
        if (this.canAddNewDetail(newDetail)) {
          this.products.push(newDetail);
        }
      });
      this.hasTemporalQuotes = this.products.length > 0;
      console.log(this.products)
    });
  }

  protected canAddNewDetail(newDetail): boolean {
    const searchResult = this.products.find((currentDetail) => {
      const additionalInformation = currentDetail.additionalInformation === newDetail.additionalInformation;
      const productDescription = currentDetail.productDescription === newDetail.productDescription;
      return additionalInformation && productDescription;
    });
    return typeof searchResult === 'undefined';
  }

}
