import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNotFoundsRoutingModule } from './page-not-founds-routing.module';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PageNotFoundsRoutingModule
  ]
})
export class PageNotFoundModule { }
