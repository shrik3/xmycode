import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Poster} from "../posters/poster.model";
import {PostersListService} from "../posters/posters.model";
import {FormGroup ,FormControl,Validators} from "@angular/forms";


@Component({
  selector: 'page-pushposter',
  templateUrl: 'pushposter.html'
})
export class PushposterPage implements OnInit{
  mode:any;
  selectOptions = ['公开','非公开'];
  listItems: Poster[];
  posterForm:FormGroup;
  constructor(private plService :PostersListService, private navCtrl: NavController,
              private navParams: NavParams
    ){}


  ngOnInit() {

    this.mode = this.navParams.get('mode');
    this.initializeForm();
  }
  onSubmit(){
    const value = this.posterForm.value;
    this.plService.addItem(value.title, value.article);
    this.posterForm.reset();
    this.navCtrl.pop();
  }
  private initializeForm() {
    this.posterForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'article': new FormControl(null, Validators.required),
      'selectype': new FormControl('公开', Validators.required)
    });
  }
}
  /*onSubmit(){
    const value = this.posterForm.value;
    this.plService.addItem(value.title, value.article);
    this.navCtrl.push(CommunityHomepage);
  }
  private loadItems(){
    this.listItems = this.plService.getItems();

  }

    let title = null;
    let article = null;






    });
  }*/

