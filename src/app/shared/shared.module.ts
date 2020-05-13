import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TableauLightComponent } from './component/tableau-light/tableau-light.component';
import { ButtonComponent } from './component/button/button.component';



@NgModule({
  declarations: [TableauLightComponent, ButtonComponent],
  exports: [TemplatesModule, TableauLightComponent, ButtonComponent],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class SharedModule { }
