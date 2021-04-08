import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  @Input() products: any;
  @Input() category: number;
  public filteredProducts: any;

  constructor() {
  }

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }

  ngAfterViewInit(): void {

  }

  searchProduct(event: Event): void {

    const termToBeFound = (event.target as HTMLInputElement).value;
    const expression = new RegExp(termToBeFound, 'gi');
    const filtered = [];
    this.products.forEach((object) => {
      const category = object.filter((element) => {
        const matchProductName = element.productServiceDescription.match(expression);
        const matchProductCategory = element.subCategoryDescription.match(expression);
        return matchProductName || matchProductCategory;
      });
      if (category.length > 0) {
        filtered.push(category);
      }
    });
    this.filteredProducts = filtered;
  }

}
