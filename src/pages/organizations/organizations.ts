import { Component } from '@angular/core';
import {NavParams, ViewController, LoadingController, NavController} from 'ionic-angular';
import {ServiceTask } from '../../providers/service-task';
import { ContactDetails} from '../contactdetails/contactdetails';
@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html',
  providers: [ServiceTask]
})
export class Organizations {

  private organizations: any;
  constructor(public params: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public service: ServiceTask
  ) {



    //请求Api获取社团列表
    this.service.get('http://api.shrik3.com/api/community').subscribe(data => {
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
