import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.css']
})
export class PropBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = "Data binding using Property Binding";      
  imgUrl="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";   
}
