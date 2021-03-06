export class QuotationRequestDetail {
  private _productId: number;
  private _productDescription: string;
  private _quantity: number;
  private _additionalInformation: string;
  private _amount: number;
  private _discount: number;
  private _description: string;
  private _provider: string;
  private _idproductprovider: string;

  constructor(quotationDetail?) {
    if (quotationDetail) {
      this._productId = quotationDetail.productId;
      this._productDescription = quotationDetail.productDescription;
      this._quantity = quotationDetail.quantity;
      this._additionalInformation = quotationDetail.additionalInformation;
      this._provider = quotationDetail.provider;
      this._amount = quotationDetail.amount;
      this._idproductprovider = quotationDetail.idproductprovider;
    }
  }

  get productId(): number {
    return this._productId;
  }

  set productId(value: number) {
    this._productId = value;
  }

  get productDescription(): string {
    return this._productDescription;
  }

  set productDescription(value: string) {
    this._productDescription = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get additionalInformation(): string {
    return this._additionalInformation;
  }

  set additionalInformation(value: string) {
    this._additionalInformation = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    this._discount = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get provider(): string {
    return this._provider;
  }

  set provider(value: string) {
    this._provider = value;
  }

  get idproductprovider(): string {
    return this._idproductprovider;
  }

  set idproductprovider(value: string) {
    this._idproductprovider = value;
  }
}
