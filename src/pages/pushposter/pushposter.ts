import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PosterPage} from "../poster/poster";

/*
  Generated class for the Pushposter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pushposter',
  templateUrl: 'pushposter.html'
})
export class PushposterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  pushPoster(){
    this.navCtrl.push(PosterPage);
  }

}
