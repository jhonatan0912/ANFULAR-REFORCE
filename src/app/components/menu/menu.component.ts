import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  rutas = [
    {
      name: 'home',
      path: '/home'
    },
    {
      name: 'about',
      path: '/about'
    },
    {
      name: 'contact',
      path: '/contact'
    },
    {
      name: 'posts',
      path: '/posts'
    }
  ];
}
