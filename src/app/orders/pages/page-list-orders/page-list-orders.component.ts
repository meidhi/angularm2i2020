import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from '../../services/order.service';

import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Button } from 'src/app/shared/interfaces/button';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection$: Subject<Order[]> = new Subject();
  public collection: Order[];
  public title: string;
  public headers: string[];
  public subtitle: string;
  public states = Object.values(StateOrder);
  public btnRoute: Button;
  public btnHref: Button;
  public btnAction: Button;


  constructor(private os: OrderService) { }

  ngOnInit(): void {
    this.title = "Orders";
    this.subtitle = "All orders";

    this.btnRoute = {
      text: 'Add an order',
      route: 'add'
    };
    this.btnHref = {
      text: 'Google',
      href: 'http://www.google.fr'
    };
    this.btnAction = {
      text: 'Open popup',
      action: true
    };

    //   this.os.collection.subscribe((datas) => {
    //   this.collection = datas;
    //   // console.log(datas);
    this.headers = [
      "Type",
      "Client",
      "NbJours",
      "TjmHt",
      "Total Ht",
      "Total  Ttc",
      "State",
      "Action"
    ];
    // });
    // this.collection$ = this.os.collection;
    this.os.collection.subscribe((datas) => {
      this.collection$.next(datas);
    });
  }

  public changeState(item: Order, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      // traite erreur
      item.state = res.state;
    });
  }
  public openPopPup(){
    console.log('popup OK');
  }

  public delete(item: Order) {
    this.os.delete(item).subscribe((res) => {
      // traiter res de l'api;
      this.os.collection.subscribe((datas) => {
        this.collection$.next(datas);
      });
    });
  }
}
