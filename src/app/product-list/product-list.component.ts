import { Component, OnInit } from '@angular/core';
import { Store, select, createSelector, State } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items = [];
  showDetails = false;
  store$;
  constructor(private store: Store<any>) {
    this.store$ = store.select('products');
  }

  ngOnInit(): void {
    this.items = [
      { name: 'HCL Tech', place: 'Noida' },
      { name: 'TCS', place: 'Mumbai' },
      { name: 'Wipro', place: 'Noida' },
      { name: 'Infosys', place: 'Chennai' },
      { name: 'HP', place: 'Gurgaon' }
    ];

    // ToDO: Unsubscribe
    // this.store.pipe(select('products')).subscribe(
    //   (products) => {
    //     console.log('1Store select subscription: ', products);
    //     if (products) {
    //       console.log('Store select subscription: ', products);
    //       this.showDetails = products.showProductCode;
    //     }
    //   }
    // );

    // this.store.select('products');

  }
  showDetailInfo(e) {
    // this.showDetails = e.target.checked;
    const setShowDetailToggle = e.target.checked;
    console.log('check box clicked: ', this.store);
    this.store.dispatch({
      type: 'TOGGLE_PRODUCT_CODE',
      payload: setShowDetailToggle
    });
  }


}
