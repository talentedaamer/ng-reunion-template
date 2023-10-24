import { Component, Input, OnInit } from '@angular/core';
import { RuCardTypes } from 'projects/ru-components/src/types/ru-card-types';

@Component({
  selector: 'ru-card',
  templateUrl: './ru-card.component.html',
  styleUrls: ['./ru-card.component.css']
})
export class RuCardComponent implements OnInit {

  @Input() type: RuCardTypes = "default";

  @Input() heading: string = "";

  @Input() subHeading: string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

}
