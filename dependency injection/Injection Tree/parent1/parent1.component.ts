import { Component, OnInit } from '@angular/core';
import { SharedService} from '../shared.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  providers :[SharedService]
})
export class Parent1Component implements OnInit {

  ngOnInit() {
  }

  sharedValue;

  constructor(private sharedService:SharedService){
    this.sharedValue=sharedService.getSharedValue();
    console.log('Parent-1 ' + this.sharedValue.toString());
  }
}