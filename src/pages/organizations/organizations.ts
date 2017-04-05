import { Component } from '@angular/core';
import {NavParams, ViewController, LoadingController, NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { ContactDetails} from '../contactdetails/contactdetails';
@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html'
})
export class Organizations {

  private organizations: any;
  constructor(public params: NavParams,
    public viewCtrl: ViewController,
    private http: Http,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController
  ) {



    //请求Api获取社团列表
    this.http.get('http://api.shrik3.com/api/community').map(res => res.json()).subscribe(data => {
      // console.log(data);
      this.organizations = data.communities;


      // console.log(this.organizations);
    });



    // if(this.navCtrl.canGoBack()){
    //   console.log('yes');
    // }else{
    //   console.log('no');
    // }

  }


  openHomepage(event, organization) {
    this.navCtrl.push(ContactDetails, { item: organization });
  }

}
