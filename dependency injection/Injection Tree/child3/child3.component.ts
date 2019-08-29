import { Component, OnInit } from '@angular/core';
import { SharedService} from '../shared.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  providers :[]
})
export class Child3Component implements OnInit {

  sharedValue;

  constructor(private sharedService:SharedService){
    this.sharedValue=sharedService.getSharedValue();
    console.log('Child-3 ' + this.sharedValue.toString());
  }

  ngOnInit() {
  }

}