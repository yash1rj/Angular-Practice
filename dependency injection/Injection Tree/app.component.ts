import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { LoggerService } from './logger.service';
import { SharedService } from './shared.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: []
})
export class AppComponent 
{
}