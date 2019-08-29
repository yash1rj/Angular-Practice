import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductService {

  constructor(private loggerService:LoggerService) { 
    this.loggerService.log("Product Service Constructed");   
  }    

  // We have created a getProducts method, which returns the collection of the products. 
  // In this example, we have hard coded the products. 
  // In real life, you would send an HTTP request to your back end API to get the data
  public getProducts() {
    this.loggerService.log("getProducts called");
    let products: Product;

    products=[
        new Product(1,'Memory Card',500),
        new Product(1,'Pen Drive',750),
        new Product(1,'Power Bank',100)
    ]
    
    this.loggerService.log(products);
    return products;
  }

}
