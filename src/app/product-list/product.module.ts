
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';

import { StoreModule } from '@ngrx/store';
import { productReducer } from '../store/product.reducer';

@NgModule({
    declarations: [
        ProductListComponent
    ],
    providers: [
    ],
    imports: [
        BrowserModule,
        CommonModule,
        StoreModule.forFeature('test', productReducer)
    ]
})
export class ProductModule { }
