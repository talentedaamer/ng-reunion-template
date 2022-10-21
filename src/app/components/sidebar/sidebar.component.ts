import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  name?: string;
  icon?: string;
  link?: string;
  title?: boolean;
  divider?: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuList: MenuItem[] = [
    {
      name: 'Pages',
      title: true,
    },
    {
      name: 'Link to Component',
      link: '/login',
      icon: 'person'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
