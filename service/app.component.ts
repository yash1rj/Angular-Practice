import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent 
{
  products: Product;
  productService;

  constructor(){
    // In the example, we instantiated the productService in the Component directly as shown below
    this.productService=new ProductService();

    //Directly instantiating the service as shown above has many disadvantageous

    /* The ProductService is tightly coupled to the Component. If we change the ProductService class definition, then we need to update every code where service is used
    If we want to change ProductService with BetterProductService, then we need search wherever the ProductService is used and manually change it
    Makes Testing difficult. We may need to provide mockProductService for testing and use the ProductService for Production.
    This problem can be solved by Angular Dependency injection. */
  }

  getProducts() {
    this.products=this.productService.getProducts();
  }
}
