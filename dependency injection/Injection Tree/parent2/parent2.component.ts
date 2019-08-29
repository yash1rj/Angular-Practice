import { Component, OnInit } from '@angular/core';
import { SharedService} from '../shared.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  providers :[SharedService]
})
export class Parent2Component implements OnInit {

  ngOnInit() {
  }

  sharedValue;

  constructor(private sharedService:SharedService){
    this.sharedValue=sharedService.getSharedValue();
    console.log('Parent-2 ' + this.sharedValue.toString());
  }
}