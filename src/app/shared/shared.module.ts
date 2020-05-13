import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TableauLightComponent } from './component/tableau-light/tableau-light.component';
import { ButtonComponent } from './component/button/button.component';
import { TotalPipe } from './pipes/total.pipe';
import { TableauDarkComponent } from './component/tableau-dark/tableau-dark.component';



@NgModule({
  declarations: [TableauLightComponent, ButtonComponent, TotalPipe, TableauDarkComponent],
  exports: [TemplatesModule, TableauLightComponent, ButtonComponent, TotalPipe, TableauDarkComponent],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class SharedModule { }
