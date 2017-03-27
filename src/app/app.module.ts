import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UserCenter } from '../pages/usercenter/usercenter';

import { TabsPage} from '../pages/tabs/tabs';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MessagesPage } from '../pages/messages/messages';
import { HomeDetail } from '../pages/homedetail/homedetail';
import { ContactDetails} from '../pages/contactdetails/contactdetails';
import {MessageDetail} from '../pages/messagedetail/messagedetail';
import { LoginPage } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Organizations } from '../pages/organizations/organizations';
import { ManagePage } from '../pages/manage/manage';
import { PopoverPage } from '../pages/popover/popover';
import { AddManage } from '../pages/addmanage/addmanage';
import { UserEdit } from '../pages/useredit/useredit';
import { CommunityHomepage } from '../pages/communityhomepage/communityhomepage';
@NgModule({
  declarations: [
    MyApp,
    UserCenter,
    Organizations,
    TabsPage,
    ContactPage,
    HomePage,
    MessagesPage,
    HomeDetail,
    ContactDetails,
    MessageDetail,
    LoginPage,
    Register,
    ManagePage,
    PopoverPage,
    AddManage,
    UserEdit,
    CommunityHomepage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true'         //隐藏全部子页面tabs
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserCenter,
    Organizations,
    TabsPage,
    ContactPage,
    HomePage,
    MessagesPage,
    HomeDetail,
    ContactDetails,
    MessageDetail,
    LoginPage,
    Register,
    ManagePage,
    PopoverPage,
    AddManage,
    UserEdit,
    CommunityHomepage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
