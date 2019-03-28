import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  selector: 'page-gallary',
  templateUrl: 'gallary.html',
})
export class GallaryPage {
  imgSrc:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imgSrc = 'assets/placeholders/question-paper.png';
    if(navParams.get('from') === 'products'){
      this.imgSrc = 'assets/placeholders/uniform.jpg';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GallaryPage');
  }

  openNotificationsPage(){
    this.navCtrl.push(NotificationsPage);
  }

}
