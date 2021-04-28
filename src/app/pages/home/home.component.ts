import { Component, OnInit } from "@angular/core";
import { ProductServiceDetail } from "@models/product-service-detail";
import { ProductsService } from "@provider/products/products.service";
import { Utilities } from "@app/utilities/utilities";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public productsBySubCategory: any;

  constructor(
    private productsService: ProductsService,
    private utilities: Utilities,
    private router: Router
  ) {
    window.localStorage.setItem("previousUrl", this.router.url);
  }

  ngOnInit(): void {
    this.productsService
      .getAllProductsAndServices()
      .subscribe((products: [ProductServiceDetail]) => {
        setTimeout(() => {
          let product = this.utilities.groupBy(
            products,
            "subCategoryDescription"
          );
          product = Object.values(product);
          this.utilities.multiSortBy(product, "totalScore");
          console.log("product, ", product);
          this.productsBySubCategory = product;
          console.log(
            "this.productsBySubCategory, ",
            this.productsBySubCategory
          );
        }, 0);
      });
  }
}
