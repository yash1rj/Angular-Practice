import { Component} from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'my-app',
  template: `
        <h1>{{title}}!</h1>
        <p> Message : <input type='text' [(ngModel)]='message'> </p>
        <p> Code : <input type='text' [(ngModel)]='code'></p>
        <p> Name : <input type='text' [(ngModel)]='name'></p>
        <p><button (click)="updateCustomer()">Update </button>
        <child-component [message]=message [customer]=customer></child-component>
        ` ,

        styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngOnChanges';
  message = '';
  customer: Customer = new Customer();
  name= '';
  code= 0;

  updateCustomer() {
    this.customer= new Customer();
    this.customer.name = this.name;
    this.customer.code = this.code;
  }

}
