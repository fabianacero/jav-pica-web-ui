import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Utilities} from '../../../utilities/utilities';
import {QuotationRequest} from '../../../models/quotation-request';
import {QuotationRequestDetail} from '../../../models/quotation-request-detail';
import {ProductServiceDetail} from '../../../models/product-service-detail';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() productServiceData;
  private categoryIndex: number;
  public productServiceDescription: string;
  public totalScore: number;
  public temporalQuotations = [];
  public quotation: QuotationRequest;
  public quotationDetail: QuotationRequestDetail;

  constructor(private utilities: Utilities) {
  }

  ngOnInit(): void {
    this.categoryIndex = 0;
    this.quotation = new QuotationRequest();
    this.quotationDetail = new QuotationRequestDetail();
    this.temporalQuotations = this.utilities.getFromSessionObject('quotation', []);
    if (this.utilities.isEmpty(this.temporalQuotations)) {
      this.temporalQuotations = [];
    }
    this.quotationDetail = new QuotationRequestDetail();
    const productServiceDataDecoded = atob(this.productServiceData);
    if (productServiceDataDecoded) {
      const productServiceData = JSON.parse(productServiceDataDecoded) as ProductServiceDetail;
      this.productServiceDescription = productServiceData.productServiceDescription;
      this.totalScore = productServiceData.totalScore;
      this.quotationDetail.productDescription = this.productServiceDescription;
      this.quotationDetail.productId = productServiceData.totalScore;
      if (this.temporalQuotations[this.categoryIndex]) {
        this.quotation = Object.assign(new QuotationRequest(), this.temporalQuotations[this.categoryIndex]);
        this.quotation.assingObjectToDetail(this.quotation.details);
      }
    }
  }

  public onSubmit(form: NgForm) {
    if (form.valid) {
      const detail = new QuotationRequestDetail({
        productId: this.quotationDetail.productId,
        quantity: this.quotationDetail.quantity,
        productDescription: this.quotationDetail.productDescription,
        additionalInformation: this.quotationDetail.additionalInformation
      });
      this.quotation.categoryId = 0;
      this.quotation.addDetail(detail);
      this.temporalQuotations[this.categoryIndex] = this.quotation;
      this.utilities.saveOnSession('quotation', this.temporalQuotations);
      form.reset();
    }
    return false;
  }

}
