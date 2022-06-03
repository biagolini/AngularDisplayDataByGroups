import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpansionComponent } from './components/expansion/expansion.component';

import { HomeComponent } from './components/home/home.component';
import { ListIconsComponent } from './components/list-icons/list-icons.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'nested-ngfor', component: ListIconsComponent},
  { path: 'expansion', component: ExpansionComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
