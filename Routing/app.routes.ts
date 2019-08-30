import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { ProductComponent } from './product/product.component'
import { ErrorComponent } from './error/error.component'

import { ProductDetailsComponent } from './product/product-details/product-details.component'

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];
