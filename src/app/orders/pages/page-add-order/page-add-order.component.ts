import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public states = Object.values(StateOrder);
  constructor() { }

  ngOnInit(): void {
    this.title = 'Orders';
    this.subtitle = 'Add order';
  }

}
