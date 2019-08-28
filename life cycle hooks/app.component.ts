import { Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit ,
  DoCheck, OnChanges, OnDestroy, OnInit,  Input, SimpleChanges  } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked,OnDestroy {
  
  displayChild: boolean=false;

  constructor() {
    console.log("AppComponent:Constructor");
  }

  toggle() {
    this.displayChild=!this.displayChild;
  }

  ngOnChanges() {
    console.log("AppComponent:OnChanges");
  }


  ngOnInit() {
    console.log("AppComponent:OnInit");
  }

  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }

   ngAfterContentInit() {
    console.log("AppComponent:AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:OnDestroy");
  }
}
