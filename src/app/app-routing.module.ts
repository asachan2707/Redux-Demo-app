import { NgModule, Host } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';

import { StoreModule } from '@ngrx/store';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    children: [
      { path: 'product-list', component: ProductListComponent }
    ]
  },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forFeature('products', {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
