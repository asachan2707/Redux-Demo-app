import { Component, OnInit } from '@angular/core';
import { Store, select, createSelector, State } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items = [];
  showDetails: boolean;
  errorMessage: string;
  products: Product[];
  selectedProduct: Product | null;
  sub: Subscription;

  constructor(private store: Store<any>, private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.productService.selectedProductChanges$.subscribe(
      selectedProduct => this.selectedProduct = selectedProduct
    );

    this.productService.getProducts().subscribe(
      (products: Product[]) => this.products = products,
      (err: any) => this.errorMessage = err.error
    );

    // TODO: Unsubscribe
    this.store.pipe(select('products')).subscribe(
      products => {
        if (products) {
          this.showDetails = products.showProductCode;
        }
      });
  }
  showDetailInfo(e) {
    // this.showDetails = e.target.checked;
    const setShowDetailToggle = e.target.checked;
    this.store.dispatch({
      type: 'TOGGLE_PRODUCT_CODE',
      payload: setShowDetailToggle
    });
  }


}
