import { Component, Input, OnChanges, OnInit, SimpleChanges, SimpleChange, DoCheck  } from '@angular/core';
import { Customer } from './customer';

@Component({
    selector: 'child-component',
    template: `<h2>Child  Component</h2>
               <p>Message {{ message }} </p>
               <p>Customer Name {{ customer.name }} </p>
               <p>Customer Code {{ customer.code }} </p>
               <p>Do Check count {{ DocheckCount }} </p>
               <ul><li *ngFor="let log of changelog;"> {{ log }}</li></ul> `
})
export class ChildComponent implements OnChanges, DoCheck, OnInit {
    @Input() message: string;
    @Input() customer: Customer;
    changelog: string[] = [];
    oldCustomer: Customer= new Customer();
    DocheckCount = 0;

    ngOnInit() {
        console.log('OnInit');
        this.oldCustomer = Object.assign({}, this.customer);
    }

    ngDoCheck() {
        console.log('Docheck');
        this.DocheckCount++;
        if (this.oldCustomer.name !== this.customer.name || this.oldCustomer.code !== this.customer.code ) {
            const to  = JSON.stringify(this.customer);
            const from = JSON.stringify(this.oldCustomer);
            const changeLog = `DoCheck customer: changed from ${from} to ${to} `;
            this.changelog.push(changeLog);

            this.oldCustomer = Object.assign({}, this.customer);
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('OnChanges');
        console.log(JSON.stringify(changes));

        // tslint:disable-next-line:forin
        for (const propName in changes) {
             const change = changes[propName];
             const to  = JSON.stringify(change.currentValue);
             const from = JSON.stringify(change.previousValue);
             const changeLog = `${propName}: changed from ${from} to ${to} `;
             this.changelog.push(changeLog);
        }
    }
}
