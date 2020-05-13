import { Component, OnInit, Input, OnChanges, Pipe } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss']
})
export class TableauLightComponent implements OnInit, OnChanges {
@Input() collection: Order[];
  constructor() {
    // json  new Pipe();
  }

  ngOnInit(): void {
    // console.log(this.collection);
  }
  ngOnChanges(): void {
    // console.log(this.collection);
  }

}
