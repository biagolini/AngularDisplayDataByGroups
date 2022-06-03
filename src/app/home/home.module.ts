import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { ListIconsComponent } from './components/list-icons/list-icons.component';
import { SelectComponent } from './components/select/select.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [

    ListIconsComponent,
    ExpansionComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
