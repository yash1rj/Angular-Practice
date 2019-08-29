import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submitted:boolean;

  contact:Contact = { 
      firstname:"Sachin",
      lastname:"Tendulkar",
      address: { city:"Mumbai",street:"Perry Cross Rd", pincode:"400050"}
  };

  onSubmit(contactForm) {
    console.log(contactForm.value);
    this.submitted = true;
    this.contact = contactForm.value;
  }

}

class Contact {
    firstname: string ;
    lastname: string ;
    address: {
       city:string
       street: string
       pincode: string
    }
}
