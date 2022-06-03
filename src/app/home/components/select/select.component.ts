import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ICON_BY_GROUP_DATA } from 'src/app/shared/data/data';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private form: FormBuilder) {};

  allIcons: any[] = ICON_BY_GROUP_DATA;

  iconForm = this.form.group({
    iconId: [],

  });
}


