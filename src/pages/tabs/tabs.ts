import { Component } from '@angular/core';

import { TasksPage } from '../tasks/tasks';
import { HomePage } from '../home/home';
import { StockPage } from '../stock/stock';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = TasksPage;
  tab3Root: any = StockPage;

  constructor() {

  }
}
