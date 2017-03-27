// import { Component, ViewChild } from '@angular/core';
// import { Nav, Platform } from 'ionic-angular';
import { Component, ViewChild} from '@angular/core';
import { Nav, Platform ,ActionSheetController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
// import { Organizations } from '../pages/organizations/organizations';
// import { AddManage } from '../pages/addmanage/addmanage';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { UserCenter } from '../pages/usercenter/usercenter';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private rootPage : any;



  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
  public actionSheetCtrl: ActionSheetController) {
    this.rootPage = TabsPage;
    this.initializeApp();


    // used for an example of ngFor and navigation
    this.pages = [
      { title: '用户中心', component: UserCenter },
      // { title: 'Page Two', component: Page2 }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      //重写推出按钮******start
      document.addEventListener('backbutton',()=>{
        let activeVC = this.nav.getActive();
        let page = activeVC.instance;
        //
        // if((page instanceof AddManage)||(page instanceof Organizations)){
        //   return this.nav.pop();
        // }
          // if (!(page instanceof TabsPage)) {
          //   if (!this.nav.canGoBack()) {
          //     //检测到在根视图点击了返回按钮。
          //     return this.platform.exitApp();
          //   }
          //   //检测到在子路径中点击了返回按钮。
          //   return this.nav.pop();
          // }


          let tabs = page.tabs;
          let activeNav = tabs.getSelected();

          // if (!activeNav.canGoBack()) {
          //   //检测到在 tab 页面的顶层点击了返回按钮。
          //   return this.platform.exitApp();
          // }

          if(page instanceof LoginPage){
            this.platform.exitApp();
          }

           //检测到当前 tab 弹出层的情况下点击了返回按钮。
          // return activeNav.pop();




        // if(page instanceof LoginPage){
        //   return this.platform.exitApp();
        // }

      },false);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
