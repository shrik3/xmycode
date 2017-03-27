import { Component ,ViewChild} from '@angular/core';
import { Tabs } from 'ionic-angular';


import { HomePage } from '../home/home';
import { MessagesPage } from '../messages/messages';
import { ContactPage } from '../contact/contact';
// import { UserCenter } from '../usercenter/usercenter';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

    @ViewChild('myTabs') tabs: Tabs;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ContactPage;
  tab3Root: any = MessagesPage;

  constructor() {

  }

  ionViewDidEnter(){
    this.tabs.select(0);
  }
}
