import {Component, OnInit} from '@angular/core';
import {ProductServiceDetail} from '../../models/product-service-detail';
import {ProductsService} from '../../provider/products/products.service';
import {Utilities} from '../../utilities/utilities';
import {CarriersService} from '../../provider/carriers/carriers.service';
import {CarriersResponse} from '../../models/carriers-response';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState, selectCarrierState } from "@app/store/app.states";
import { Carrie } from "@app/store/carrier/actions/carrier.actions";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  public productsBySubCategory: any;
  public carriers;
  getState: Observable<any>;

  constructor(private productsService: ProductsService,
              private carriersService: CarriersService,
              private utilities: Utilities,
              private store: Store<AppState>) {
                this.getState = this.store.select(selectCarrierState);
  }

  ngOnInit(): void {
  }

  public async getAllProductsAndServices() {
    this.productsService.getAllProductsAndServices().subscribe((products: [ProductServiceDetail]) => {
      this.productsBySubCategory = this.utilities.groupBy(products, 'subCategoryDescription');
      this.productsBySubCategory = Object.values(this.productsBySubCategory);
      this.utilities.multiSortBy(this.productsBySubCategory, 'totalScore');
      console.log('this.productsBySubCategory, ', this.productsBySubCategory);
    });
  }

  public getAllCarriers() {
    this.carriersService.getAllCarriers().subscribe((carriers: [CarriersResponse]) => {
      this.carriers = carriers;
      this.utilities.sortBy(carriers, 'totalScore');
    });
  }

  public submitData(event: any) {
    this.store.dispatch(new Carrie(event));
  }

}
