import { Component } from '@angular/core';

import { NavParams ,NavController} from 'ionic-angular';
import { CommunityHomepage } from '../communityhomepage/communityhomepage';
@Component({
  selector: 'page-contactdetails',
  templateUrl: 'contactdetails.html'
})
export class ContactDetails {
	item: any;
	constructor(public params: NavParams,
  public navCtrl: NavController){
		this.item = params.get('item');
	}
  openhomepage(item){
    this.navCtrl.push(CommunityHomepage,{item});
  }

}
