import { Component } from '@angular/core';
import {NavParams,ViewController} from 'ionic-angular';

@Component({
  selector: 'page-messagedetail',
  templateUrl: 'messagedetail.html'
})
export class MessageDetail {
  item: any;
  constructor(public params: NavParams,
  public viewCtrl: ViewController){
    this.item = this.params.get('item');
  }

}
