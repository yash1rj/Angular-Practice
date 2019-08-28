import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `<h2>Child Component</h2>
               <button (click)="increment()">Increment</button>
               <button (click)="decrement()">decrement</button>
               <p>current count is {{ count }}<p>
    `
})
export class ChildComponent  {
// Whenever the increment/decrement buttons clicked, The child raises the event. The Parent component gets notified of the this and updates the counter with the latest value.
    @Input() count: number;
    
    // In the child component, define the countChanged event of type EventEmiiter.  Decorate the property with @Output decorator to make it accessible from the parent component
    @Output() countChanged: EventEmitter<number> =   new EventEmitter();

    increment() {
        this.count++;
        this.countChanged.emit(this.count);
      }
    decrement() {
        this.count--;
        this.countChanged.emit(this.count);
    }

}
