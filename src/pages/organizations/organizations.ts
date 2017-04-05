import { Component } from '@angular/core';
import {NavParams,ViewController,LoadingController,NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { ContactDetails} from '../contactdetails/contactdetails';
@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html'
})
export class Organizations {
  //请求api获取所有社团的简介，这里做模拟
  private organizations:any;
  constructor(public params: NavParams,
              public viewCtrl: ViewController,
              private http:Http,
              public loadingCtrl: LoadingController,
              public navCtrl: NavController
  ){

          //请求Api获取社团列表
          this.http.get('http://api.shrik3.com/api/community').map(res=>res.json()).subscribe(data=>{
            // console.log(data);
            this.organizations = data.communities;
            console.log(this.organizations);
          });

  //   this.organizations = [{ contactid: 1, contactname: "One", contacttext: "You are my favorite person in my life." },
  //     { contactid: 2, contactname: "Two", contacttext: "If you get tired, learn to rest, not to quit." },
  //     { contactid: 3, contactname: "Three", contacttext: "Beauty is to fight for rather than to wait for." },
  //     { contactid: 4, contactname: "Four", contacttext: "Always remember the past, but never get stuck." },
  //     { contactid: 5, contactname: "Five", contacttext: "In fact, each of the road leading to the sun, are full of frustrations." }];
  }


  openHomepage(event,organization){
    this.navCtrl.push(ContactDetails,{ item: organization });
  }

}
