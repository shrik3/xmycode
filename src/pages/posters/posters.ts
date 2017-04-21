import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Poster } from './poster.model'
/*
  Generated class for the Posters page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-posters',
  templateUrl: 'posters.html'
})
export class PostersPage implements OnInit{
   poster:Poster;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  ngOnInit() {
    this.poster = this.navParams.get('poster');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PostersPage');
  }

}
