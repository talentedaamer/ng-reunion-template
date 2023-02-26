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
      name: 'Dashboard',
      link: '/',
      icon: 'speed'
    },
    {
      name: 'Components',
      title: true,
    },
    {
      name: 'Typography',
      link: '/typography',
      icon: 'edit'
    },
    {
      name: 'Buttons',
      link: '/buttons',
      icon: 'smart_button'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
