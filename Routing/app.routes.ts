import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { ProductComponent } from './product/product.component'
import { ErrorComponent } from './error/error.component'

import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductOverviewComponent} from './product/product-details/product-overview.component';
import { ProductSpecComponent} from './product/product-details/product-spec.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent, 
    children: [
        { path: 'detail/:id', component: ProductDetailsComponent, 
            children : [
                { path: 'overview', component: ProductOverviewComponent },
                { path: 'spec', component: ProductSpecComponent },  
                { path: '', redirectTo:'overview', pathMatch:"full" }
            ]
        }
      ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];
