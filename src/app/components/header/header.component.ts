import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDrawer, MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  sidenav: any;

  constructor() {}

  ngOnInit(): void {}

  toggleDrawer() {
    this.sidenav.toggle();
  }
}
