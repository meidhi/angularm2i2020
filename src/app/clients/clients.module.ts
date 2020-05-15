import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { IconsModule } from '../icons/icons.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { DetailsClientComponent } from './component/details-client/details-client.component';
import { CommentsClientComponent } from './component/comments-client/comments-client.component';



@NgModule({
  declarations: [PageListClientComponent, PageAddClientComponent, FormClientComponent, PageEditClientComponent, DetailsClientComponent, CommentsClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    IconsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
