import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { IconsModule } from '../icons/icons.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageListOrdersComponent, PageAddOrderComponent, FormOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    IconsModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
