import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent {

  isSideBarOpen = true;

  sideBarToggler(toggleEvent: any) {
    this.isSideBarOpen = !this.isSideBarOpen;
  }
}
