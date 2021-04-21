import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() products: any;
  public filteredProducts: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('this.products, ', this.products);
    this.filteredProducts = this.products;
    console.log('this.filteredProducts, ', this.filteredProducts);
  }

  ngOnChanges(changes: SimpleChanges) {
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
