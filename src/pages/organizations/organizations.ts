import { Component } from '@angular/core';
import {NavParams,ViewController} from 'ionic-angular';
@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html'
})
export class Organizations {
  //请求api获取所有社团的简介，这里做模拟
  organizations: any;
  constructor(public params: NavParams,
  public viewCtrl: ViewController){

    this.organizations = [{ contactid: 1, contactname: "One", contacttext: "You are my favorite person in my life." },
      { contactid: 2, contactname: "Two", contacttext: "If you get tired, learn to rest, not to quit." },
      { contactid: 3, contactname: "Three", contacttext: "Beauty is to fight for rather than to wait for." },
      { contactid: 4, contactname: "Four", contacttext: "Always remember the past, but never get stuck." },
      { contactid: 5, contactname: "Five", contacttext: "In fact, each of the road leading to the sun, are full of frustrations." }];
  }


}
