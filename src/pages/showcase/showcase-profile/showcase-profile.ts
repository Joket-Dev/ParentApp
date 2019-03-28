import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { NotificationsPage } from '../../notifications/notifications';
// import {ShowcaseDetailsPage} from "../showcase-details/showcase-details";


@Component({
    selector: 'page-showcase-profile',
    templateUrl: 'showcase-profile.html',
})
export class ShowcaseProfilePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ShowcaseProfilePage');
    }

    openNotificationsPage(){
        this.navCtrl.push(NotificationsPage)
    }


}
