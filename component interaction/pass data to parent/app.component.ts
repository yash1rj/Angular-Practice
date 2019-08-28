import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Component Interaction';
  ClickCounter  = 5;

  countChangedHandler(count: number) {
    this.ClickCounter  = count;
    console.log(count);
  }
}
