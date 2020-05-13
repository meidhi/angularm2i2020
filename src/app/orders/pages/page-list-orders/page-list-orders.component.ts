import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection$: Observable<Order[]>;
  public collection: Order[];
  public title: string;
  public headers: string[];
  public subtitle: string;

  constructor(private os: OrderService) { }

  ngOnInit(): void {
    this.title = "Orders";
    this.subtitle = "All orders";
    //   this.os.collection.subscribe((datas) => {
    //   this.collection = datas;
    //   // console.log(datas);
    this.headers = [
      "Type",
      "Client",
      "NbJours",
      "TjmHt",
      "total Ht",
      "total  Ttc",
      "State"
    ];
    // });
    this.collection$ = this.os.collection;
  }
}
