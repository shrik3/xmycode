import {Component, OnInit, ViewChild} from '@angular/core';
import {NavController, NavParams, PopoverController, ViewController} from 'ionic-angular';
import {Poster} from "../posters/poster.model";

import {PostersListService} from "../posters/posters.model";
import {PushposterPage} from "../pushposter/pushposter";
import {PostersPage} from "../posters/posters";
@Component({
  selector: 'page-communityhomepage',
  templateUrl: 'communityhomepage.html'
})
export class CommunityHomepage implements OnInit{
    item:any;
    posters:Poster[];
    postersa:Poster[];
    nowtime:any;
    pastime:any;
    votes:any;
    constructor(public navParams: NavParams,
                public navCtrl: NavController,
                public popoverCtrl: PopoverController,
                private plService: PostersListService
                ){
        this.item = navParams.get('item');
    }

    ionViewWillEnter(){
        this.posters = this.plService.getItems();
    }

    onNewPoster() {
        this.navCtrl.push(PushposterPage, {mode: 'New'});
    }
    ngOnInit() {
        this.posters = this.navParams.get('poster');
    }
    onLoadPoster(poster: Poster) {
        this.navCtrl.push(PostersPage, {poster: Poster});
    }
    //voteUp() :boolean{
      //  this.posters.voteUp();
       // return false;
    //}

}
