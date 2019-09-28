import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GetParking';
  tabId: number = 1;
  constructor() {}
  selectTab(tabId: number){
    this.tabId = tabId;
  }
}
