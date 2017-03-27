import { Component} from '@angular/core';
import { ViewController, NavController, App, ModalController } from 'ionic-angular';
import { Organizations } from '../organizations/organizations';
import { AddManage } from '../addmanage/addmanage';
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController){

  }


    open(){
      this.navCtrl.push(Organizations);
      this.viewCtrl.dismiss();
    }
    add(){

      this.navCtrl.push(AddManage);
      this.viewCtrl.dismiss();
    }
}
