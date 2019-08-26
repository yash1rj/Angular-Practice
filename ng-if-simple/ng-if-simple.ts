import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-if-simple',  
  template: `  
    <button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>  
    show = {{show}}  
    <br>  
    <div *ngIf="show">Text to show</div>  
` 
})
export class IfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show: boolean = true;  
}
