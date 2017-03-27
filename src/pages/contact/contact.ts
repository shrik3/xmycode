import { Component } from '@angular/core';
import { NavController, PopoverController , AlertController, ToastController, ActionSheetController,ModalController} from 'ionic-angular';
import { ContactDetails } from '../contactdetails/contactdetails';
import { ManagePage } from '../manage/manage';
import { PopoverPage } from '../popover/popover';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  //请求api获取数据源
  contacts: any;
  friends: string = "all";
  favorites: any;
  //以上为模拟
  constructor(public navCtrl: NavController,
  public alertCtrl: AlertController,
  public toastCtrl: ToastController,
  public actionSheetCtrl: ActionSheetController,
  public modalCtrl: ModalController,
  public popoverCtrl: PopoverController) {

  this.favorites = [];

  this.contacts = [{ contactid: 1, contactname: "One", contacttext: "You are my favorite person in my life." },
    { contactid: 2, contactname: "Two", contacttext: "If you get tired, learn to rest, not to quit." },
    { contactid: 3, contactname: "Three", contacttext: "Beauty is to fight for rather than to wait for." }];
  }


itemClick(event, contact) {
  //点击时加载详细页面
  this.navCtrl.push(ContactDetails);

}

removeContact(contact) {
  //请求api删除
  let confirm = this.alertCtrl.create({
    title: '取消关注',
    message: '您真的要取消关注吗？',
    buttons: [
      {
        text: 'Yes',
        handler: () => {
          for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i] == contact) {
              this.contacts.splice(i, 1);
            }
          }

          let toast = this.toastCtrl.create({
            message: '取消关注成功',
            duration: 1000
          });
          toast.present();

        }
      },

      {
        text: 'No'
      }
    ]
  });
  confirm.present();
}

hold(event, contact) {
  let actionSheet = this.actionSheetCtrl.create({
    title: "操作列表",
    buttons: [
      {
        text: '申请管理',
        handler: () => {
          //请求api进行管理员身份的申请

          this.favorites[this.favorites.length] = contact;
          let toast = this.toastCtrl.create({
            message: '申请成功',
            duration: 1000
          });
          toast.present();
        }



      }, {
        text: '分享',
        handler: () => {

        }
      }, {
        text: '取消关注',
        role: 'destructive',
        handler: () => {
          let confirm = this.alertCtrl.create({
            title: '取消关注',
            message: '您真的要取消关注吗？',
            buttons: [
              {
                text: 'Yes',
                handler: () => {
                  for (var i = 0; i < this.contacts.length; i++) {
                    if (this.contacts[i] == contact) {
                      this.contacts.splice(i, 1);
                    }
                  }

                  let toast = this.toastCtrl.create({
                    message: '取消关注成功',
                    duration: 1000
                  });
                  toast.present();

                }
              },

              {
                text: 'No'
              }
            ]
          });
          confirm.present();
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {

        }
      }
    ]
  });
  actionSheet.present();
}

doRefresh(refresher){
  this.contacts[3]={ contactid: 1, contactname: "One", contacttext: "You are my favorite person in my life." };
  this.contacts[4] = { contactid: 2, contactname: "Two", contacttext: "If you get tired, learn to rest, not to quit." };


  setTimeout(() => {
    refresher.complete();
  }, 1000);
}

openManagePage(event, contact) {
  //点击时加载社团管理页面
  this.navCtrl.push(ManagePage);

}

presentPopover(){
  let popover = this.popoverCtrl.create(PopoverPage);
  popover.present({ev:event});

}

}
