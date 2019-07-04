import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Product } from './product';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    private productsUrl = 'api/products';
    private products: Product[];
    private selectedProductSource = new BehaviorSubject<Product | null>(null);
    selectedProductChanges$ = this.selectedProductSource.asObservable();

    constructor(private http: HttpClient) { }

    changeSelectedProduct(selectedProduct: Product | null): void {
        this.selectedProductSource.next(selectedProduct);
    }

    getProducts(): Observable<Product[]> {
        if (this.products) {
            return of(this.products);
        }
        return this.http.get<Product[]>(this.productsUrl)
            .pipe(
                tap(data => console.log(JSON.stringify(data))),
                tap(data => this.products = data),
                catchError(this.handleError)
            );
    }

    private handleError(err) {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }
}
