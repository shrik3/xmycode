import { Component } from '@angular/core';
import {NavParams,ViewController} from 'ionic-angular';
@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html'
})
export class ManagePage {

  constructor(public params: NavParams,
  public viewCtrl: ViewController){

  }



}
