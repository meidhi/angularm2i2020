import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { ClientsRoutingModule } from './clients-routing.module';



@NgModule({
  declarations: [PageListClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
