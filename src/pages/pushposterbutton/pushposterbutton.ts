import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PushposterPage} from "../pushposter/pushposter";

/*
  Generated class for the Pushposter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pushposter',
  templateUrl: 'pushposterbutton.html'
})
export class PushposterbuttonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  pushPoster(){
    this.navCtrl.push(PushposterPage);
  }

}
