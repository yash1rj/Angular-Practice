import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../../product.service';
import { Product } from '../../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

  product:Product;
  id;
  sub;

  constructor(private _Activatedroute:ActivatedRoute,
              private _router:Router,
              private _productService:ProductService){
  }


  ngOnInit() {

      this.sub=this._Activatedroute.params.subscribe(params => { 
          this.id = params['id']; 
          let products=this._productService.getProducts();
          this.product=products.find(p => p.productID==this.id);    
      
      });
   }

  /* Using snapshot
  ngOnInit() {
      this.id=this._Activatedroute.snapshot.params['id'];
      let products=this._productService.getProducts();
      this.product=products.find(p => p.productID==this.id);
  }
  */

  onBack(): void {
    this._router.navigate(['product']);
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
