import { Component, Input, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
interface Link {
  url: string;
  label: string;
  icon: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AI-UI';

  links: Link[] = [
    {
      url: '/home',
      label: 'Sobre mi',
      icon: 'icon'
    },
    {
      url: '/home',
      label: 'Informacion',
      icon: 'icon'
    },
    {
      url: '/home',
      label: 'Estadisticas',
      icon: 'icon'
    }
    
  ];
  @ViewChild('drawer') drawer: MatDrawer| undefined;
  constructor() {}

  toggleSidebar(){
    this.drawer?.toggle();
    
  }
}
