import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  email = new FormControl('');  
  updateEmail() {  
    this.email.setValue('sonoojaiswal@javatpoint.com');  
  } 
}
