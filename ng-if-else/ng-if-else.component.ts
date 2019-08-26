import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'ng-if-else',  
  template: `  
    <button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>  
    show = {{show}}  
    <br>  
    <div *ngIf="show; else elseBlock">Text to show</div>  
    <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>  
` 
})
export class NgIfElseComponent implements OnInit {

  constructor() { }
show: boolean = true;  
  ngOnInit() {
  }

}
