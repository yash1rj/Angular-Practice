import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductService {

  // We have created a getProducts method, which returns the collection of the products. 
  // In this example, we have hard coded the products. 
  // In real life, you would send an HTTP request to your back end API to get the data
  public getProducts() {
    let products: Product;

    products=[
        new Product(1,'Memory Card',500),
        new Product(1,'Pen Drive',750),
        new Product(1,'Power Bank',100)
    ]
    
    return products;
  }

}
