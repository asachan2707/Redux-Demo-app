
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';

import { StoreModule } from '@ngrx/store';
import { reducerFn } from '../store/product.reducer';

const productRoutes: Routes = [
    { path: '', component: ProductListComponent }
];

@NgModule({
    declarations: [
        ProductListComponent
    ],
    providers: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(productRoutes),
        StoreModule.forFeature('products', reducerFn)
    ]
})
export class ProductModule { }
