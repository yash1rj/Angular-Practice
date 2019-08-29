import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ProductService]
})
export class AppComponent 
{
  products:Product[];    
  // creation of ProductService to the constructor the AppComponent class as shown below.
  constructor(private productService:ProductService) {    
  }    

  // Now our AppComponent does not create the instance of the ProductService. 
  // It just asks for it in its Constructor. The AppComponent is now decoupled from the ProductService. The AppComponent does not know anything about the ProductService. It just works with the ProductService passed onto it. 
  // You can pass ProductService, BetterProductService or MockProductService. The AppComponent does not care.

  getProducts() {        
    this.products=this.productService.getProducts();    
  }

  // Now the responsibility of Creating the ProductService falls on the creator of the AppComponent.

  // The above pattern is known as Dependency Injection Pattern.
}
