import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';


const routes: Routes = [

  { path: '', component: PageListClientComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
