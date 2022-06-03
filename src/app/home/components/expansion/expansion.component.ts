import { Component, OnInit } from '@angular/core';
import { ICON_BY_GROUP_DATA } from 'src/app/shared/data/data';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  panelOpenState = false;


  allIcons: any[] = ICON_BY_GROUP_DATA;

  replaceUnderscore(text:string){ 
    text = text.replace(/_/g, ' ');
    return text;
  }


}
