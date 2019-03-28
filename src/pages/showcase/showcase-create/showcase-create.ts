import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../../notifications/notifications';

/**
 * Generated class for the ShowcaseCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-showcase-create',
  templateUrl: 'showcase-create.html',
})
export class ShowcaseCreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowcaseCreatePage');
  }

  openNotificationsPage(){
    this.navCtrl.push(NotificationsPage);
  }

}
