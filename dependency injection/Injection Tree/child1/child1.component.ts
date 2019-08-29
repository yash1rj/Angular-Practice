import { Component, OnInit } from '@angular/core';
import { SharedService} from '../shared.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  providers :[]
})
export class Child1Component implements OnInit {

  sharedValue;

  constructor(private sharedService:SharedService){
    this.sharedValue=sharedService.getSharedValue();
    console.log('Child-1 ' + this.sharedValue.toString());
  }

  ngOnInit() {
  }

}