import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TableauLightComponent } from './component/tableau-light/tableau-light.component';
import { ButtonComponent } from './component/button/button.component';
import { TotalPipe } from './pipes/total.pipe';
import { TableauDarkComponent } from './component/tableau-dark/tableau-dark.component';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [TableauLightComponent, ButtonComponent, TotalPipe, TableauDarkComponent, StateDirective],
  exports: [TemplatesModule, TableauLightComponent, ButtonComponent, TotalPipe, TableauDarkComponent, StateDirective,TextModule],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    TextModule
  ]
})
export class SharedModule { }
