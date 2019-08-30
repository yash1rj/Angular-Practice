import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  products:Product[];
   
  constructor(private productService:ProductService){
  }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}
