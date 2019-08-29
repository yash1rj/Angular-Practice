import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
/* Without Form Builder , Without Group */

/*export class AppComponent 
{
  contactForm = new FormGroup({
       firstname: new FormControl(),
       lastname: new FormControl(),
      })
onSubmit() {
     console.log(this.contactForm.value);
  }
}
*/



/* Without Form Builder , With Group */

/*
export class AppComponent 
{
  contactForm = new FormGroup({
       firstname: new FormControl(),
       lastname: new FormControl(),
       address: new FormGroup({
         city: new FormControl(),
         street: new FormControl(),
         pincode: new FormControl()
       })
      })
onSubmit() {
     console.log(this.contactForm.value);
  }
}
*/






/* With Form Builder with group*/
export class AppComponent 
{

contactForm: FormGroup;

constructor (private fb: FormBuilder) {

  this.contactForm = this.fb.group({
      firstname: ['',[Validators.required,Validators.minLength(10)]],
      lastname: [],
      address: this.fb.group({
        city:[],
        street: [],
        pincode: []
      })
    });

 }

onSubmit() {
     console.log(this.contactForm.value);
  }
}



/* With Form Builder without group /
/*export class AppComponent 
{
contactForm: FormGroup;
constructor (private fb: FormBuilder) {
  this.contactForm = this.fb.group({
      firstname: [],
      lastname: [],
    });
 }
onSubmit() {
     console.log(this.contactForm.value);
  }
}
*/




/* Adding Validators */
/*
contactForm = new FormGroup({
  firstname: new FormControl('Rahul', Validators.required),
  lastname: new FormControl({value: 'Dravid', disabled: true}),
  address: this.fb.group({
      city: new FormControl('',[ Validators.required]),
      street: new FormControl('',[ Validators.required]),
      pincode: new FormControl('', Validators.compose([ Validators.required,Validators.minLength(10)]))
  })
})
*/
