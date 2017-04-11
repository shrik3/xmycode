import { Component } from '@angular/core';
import {NavParams, NavController, PopoverController} from 'ionic-angular';
import {CommunityHomepage} from "../communityhomepage/communityhomepage";
import {PushposterPage} from "../pushposter/pushposter";
@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html'
})
export class ManagePage {
  item : any;
  constructor(public params: NavParams,
              public navCtrl: NavController,
              public popoverCtrl: PopoverController){
    this.item = this.params.get('item');
  }
  openhomepage(){
    this.navCtrl.push(CommunityHomepage);
  }
  selectOpts(){
    let popover = this.popoverCtrl.create(PushposterPage);
    popover.present({ev:event});

  }
}
