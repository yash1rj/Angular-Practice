import { Component } from '@angular/core';
import { Event } from './classes/event';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public clickedEvent: Event;

  childEventClicked(event: Event) {
    this.clickedEvent = event;
  }
}
