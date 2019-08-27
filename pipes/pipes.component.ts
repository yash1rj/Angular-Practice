import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string = 'pipe Example' ; 
  toDate: Date = new Date();
  msg: string = "Hello World";
  num: number = 9542.14554;
  per: number= 1.3495;
  cur: number= 175;

  celcius: number;
  Fahrenheit: number;
}
