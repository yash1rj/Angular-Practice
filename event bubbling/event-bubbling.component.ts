import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bubbling',
  templateUrl: './event-bubbling.component.html',
  styleUrls: ['./event-bubbling.component.css']
})
export class EventBubblingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSave($event){    
    console.log("Save button is clicked!", $event);    
  }    
  onDivClick(){    
    console.log("DIV is clicked!");    
  }   
}
