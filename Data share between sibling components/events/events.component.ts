import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events :Event[] = [
     {
          name: "ted James",
          location: "Phoenix"
    },
    {
          name: "mandy croft",
          location: "Manhatten"
    },
    {
          name: "liam stein",
          location: "Colorado"
    }
  ];

  numEvents = this.events.length;

  @Output() eventClicked = new EventEmitter<Event>();
  //More app code
  ngOnInit() {
  }
  
  onClick(event: Event): void {
    this.eventClicked.emit(event);
  }

}
