import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ListIconsComponent } from './components/list-icons/list-icons.component';
import { ExpansionComponent } from './components/expansion/expansion.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListIconsComponent,
    ExpansionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
