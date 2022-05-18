import { Component } from '@angular/core';
import { ICON_BY_GROUP_DATA } from 'src/app/shared/data/data';

@Component({
  selector: 'app-list-icons',
  templateUrl: './list-icons.component.html',
  styleUrls: ['./list-icons.component.scss']
})
export class ListIconsComponent  {

  allIcons: any[] = ICON_BY_GROUP_DATA;

}
