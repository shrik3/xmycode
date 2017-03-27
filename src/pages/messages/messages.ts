import { Component } from '@angular/core';
import { NavController ,ModalController} from 'ionic-angular';
import { MessageDetail } from '../messagedetail/messagedetail';
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {
  messages: any;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController){
    this.messages = [{from:'one',text:'明天专场记得来哦',img: 'assets/images/2.jpg'},
    {from:'two',text:'明天有活动,晚上七点大活小剧场，乐队专场演出',img: 'assets/images/1.jpg'}];
  }

  openMessage(event,message){
    // let messageModal = this.modalCtrl.create(MessageDetail,{item:message});
  	// messageModal.present();
    this.navCtrl.push(MessageDetail,{item:message});
  }
}
