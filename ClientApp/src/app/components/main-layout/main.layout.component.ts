import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.layout.component.html',
  styleUrls: ['./main.layout.component.css']
})

export class MainLayoutComponent {

  isSideBarOpen = true;

  sideBarToggler(toggleEvent: any) {
    this.isSideBarOpen = !this.isSideBarOpen;
  }
}
