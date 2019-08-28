import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `<h2>Child Component</h2>
               <p>current count is {{ count }}</p>
    `
})
export class ChildComponent  {
    count: number = 0;

     increment() {
        this.count++;
      }
    decrement() {
        this.count--;
    }

}
