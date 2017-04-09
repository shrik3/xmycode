import { Component } from '@angular/core';

import { NavController, MenuController, ModalController} from 'ionic-angular';

import { HomeDetail } from '../homedetail/homedetail';
import { LoginPage } from '../login/login';
import { CommunityHomepage} from '../communityhomepage/communityhomepage';
import {ServiceTask} from '../../providers/service-task';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ServiceTask]
})
export class HomePage {

  passages: any;
  public storage = window.localStorage;

  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private service: ServiceTask) {

    if (this.storage['Logined'] != 'true') {
      let LoginModal = this.modalCtrl.create(LoginPage);
      LoginModal.present();


    }

    this.service.get('http://api.shrik3.com/api/article').subscribe(data => {
      // console.log(data);
      this.passages = data.articles;
      // console.log(this.passages);
    });


    this.menuCtrl.enable(true);

  }

  openDetail(event, passage) {
    this.navCtrl.push(HomeDetail, { item: passage });
  }

  doInfinite(infiniteScroll) {


    setTimeout(() => {
      this.passages.push({
        id: 2, author: 'Three', img: "assets/images/8.jpg",
        pimg: "assets/images/3.jpg", from: 'iPhone 6', comment: '24', feelgood: '33', time: '2h',
        content: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."
      },
        {
          id: 1, author: 'Two', img: "assets/images/2.jpg",
          from: "iPhone 6s", comment: '8', feelgood: '41', time: '3h',
          pimg: "assets/images/1.jpg",
          content: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."
        });



      infiniteScroll.complete();
    }, 2000);
  }

  openHomepage() {

    this.navCtrl.push(CommunityHomepage);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
