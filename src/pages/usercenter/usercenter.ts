import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserEdit } from '../useredit/useredit';

@Component({
  selector: 'page-usercenter',
  templateUrl: 'usercenter.html'
})


export class UserCenter {
		public user = {

		  username: '',
		  password: '',
    headface: 'assets/images/2.jpg'
  }
  public storage = window.localStorage;
  constructor(public navCtrl: NavController,
				public modalCtrl: ModalController) {
    if (this.storage["Logined"] == "true") {
      //已经登陆的状态，不用跳转，显示用户信息即可
      this.user.headface = "assets/images/" + this.storage["username"] + ".jpg";

    }
    else {
      let loginModal = this.modalCtrl.create(LoginPage);
      loginModal.onDidDismiss(data => {
        this.user.headface = "assets/images/" + data + ".jpg";
      })
      loginModal.present();
    }
  }

  logout() {

    this.storage["username"] = "";
    this.storage["Logined"] = "";
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.onDidDismiss(data => {
      this.user.headface = "assets/images/" + data + ".jpg";
				})
    loginModal.present();
  }
  edit(event){
    this.navCtrl.push(UserEdit);
  }
}
