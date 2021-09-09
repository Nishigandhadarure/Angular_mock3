import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Users } from '../user';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit,OnChanges {
  
  @Input() users:Array<Users>=[];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.users);
  }

  ngOnInit(): void {
  }

}
