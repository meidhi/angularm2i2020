import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TableauLightComponent } from './component/tableau-light/tableau-light.component';
import { ButtonComponent } from './component/button/button.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TableauLightComponent, ButtonComponent, TotalPipe],
  exports: [TemplatesModule, TableauLightComponent, ButtonComponent, TotalPipe],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class SharedModule { }
