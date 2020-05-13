import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection: Order[];
  constructor(private os: OrderService) { }

  ngOnInit(): void {
    this.os.collection.subscribe((datas) => {
    this.collection = datas;
    console.log(datas);

  });
  }
}
