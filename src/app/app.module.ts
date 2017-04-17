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
import {SettingsPage} from "../pages/settings/settings";
import {PushposterPage} from "../pages/pushposter/pushposter";
import {PushposterbuttonPage} from "../pages/pushposterbutton/pushposterbutton";
import {PostersPage} from "../pages/posters/posters";
import {PostersListService} from "../pages/posters/posters.model";
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
    CommunityHomepage,
    SettingsPage,
    PushposterPage,
    PushposterbuttonPage,
    PostersPage
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
    CommunityHomepage,
    SettingsPage,
    PushposterPage,
    PushposterbuttonPage,
    PostersPage
  ],
  providers: [
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      PostersListService
    ]
})
export class AppModule {}
