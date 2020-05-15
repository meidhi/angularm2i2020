import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public states = Object.values(StateOrder);


  constructor(private os: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    this.title = 'Orders';
    this.subtitle = 'Add order';
  }
  public add(item: Order) {
    this.os.add(item).subscribe((res) => {
      this.router.navigate(['orders']);
    });
  }
}
