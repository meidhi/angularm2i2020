import { Component, OnInit, Input, OnChanges, Pipe, ViewEncapsulation } from '@angular/core';
// import { Order } from '../../models/order';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableauLightComponent implements OnInit, OnChanges {
// @Input() collection: Order[];
@Input() headers: string[];
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
